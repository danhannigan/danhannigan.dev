import GhostContentAPI from "@tryghost/content-api";
// Create API instance with site credentials
const api = new GhostContentAPI({
  url: "https://ghost.danhannigan.dev",
  key: "7111237c9ae7f7d59c063600a1",
  version: "v5.0",
});

export async function getGhostPosts() {
  const posts = await api.posts.browse({ limit: "all", include: "tags" });
  return posts;
}

export async function getPostBySlug(slug) {
  const post = await api.posts.read(
    { slug },
    { formats: ["html"], include: "tags" }
  );
  return post;
}
