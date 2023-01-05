export function getWebMentions() {
  const webMentions = fetch(
    `https://webmention.io/api/mentions.jf2?www.danhannigan.dev&token=${process.env.WEBMENTION_TOKEN}`
  )
    .then((response) => response.json())
    .then((responseJson) => responseJson.children);
  return webMentions;
}
