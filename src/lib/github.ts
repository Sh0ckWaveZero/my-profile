export type GitHubUser = {
  login: string;
  name: string | null;
  bio: string | null;
  company: string | null;
  location: string | null;
  blog: string | null;
  created_at: string;
  public_repos: number;
  followers: number;
};

export type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  topics: string[] | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
};

export type GitHubData = { user: GitHubUser | null; repos: GitHubRepo[] };

const API_BASE = "https://api.github.com/users/Sh0ckWaveZero";
const LOGIN = "Sh0ckWaveZero";
const REVALIDATE = 86400;

/**
 * Pull the GitHub profile + all public repos (2 pages, ~149 repos).
 * The user-repos endpoint does NOT support sort=stars (invalid values
 * silently fall back to full_name), so star ranking happens in
 * selectTopRepos(). Any failed request degrades to null/[] — callers
 * fall back to curated data.
 */
export async function getGitHubData(): Promise<GitHubData> {
  try {
    const [userRes, page1, page2] = await Promise.all([
      fetch(API_BASE, { next: { revalidate: REVALIDATE } }),
      fetch(`${API_BASE}/repos?per_page=100&page=1`, { next: { revalidate: REVALIDATE } }),
      fetch(`${API_BASE}/repos?per_page=100&page=2`, { next: { revalidate: REVALIDATE } }),
    ]);

    const user: GitHubUser | null = userRes.ok ? ((await userRes.json()) as GitHubUser) : null;

    const repos: GitHubRepo[] = [];
    for (const res of [page1, page2]) {
      if (!res.ok) continue;
      const list = (await res.json()) as GitHubRepo[];
      if (Array.isArray(list)) repos.push(...list);
    }
    const unique = new Map<number, GitHubRepo>();
    for (const repo of repos) unique.set(repo.id, repo);

    return { user, repos: [...unique.values()] };
  } catch {
    return { user: null, repos: [] };
  }
}

export function selectTopRepos(repos: GitHubRepo[], count = 3): GitHubRepo[] {
  return repos
    .filter(
      (repo) =>
        !repo.fork && !repo.archived && repo.name.toLowerCase() !== LOGIN.toLowerCase(),
    )
    .sort(
      (a, b) =>
        b.stargazers_count - a.stargazers_count || b.pushed_at.localeCompare(a.pushed_at),
    )
    .slice(0, count);
}

/** Repo count per language across public non-fork repos, e.g. "TypeScript×14". */
export function getLangStats(repos: GitHubRepo[], max = 6): string[] {
  const counts = new Map<string, number>();
  for (const repo of repos) {
    if (repo.fork || !repo.language) continue;
    counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, max)
    .map(([lang, n]) => `${lang}×${n}`);
}
