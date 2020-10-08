export const items = [
  "asia",
  "africa",
  "america",
  "amsterdam",
  "automobile",
  "autobiography",
  "pizza",
  "australia",
  "austria",
  "bhutan",
  "brazil",
  "canada",
  "can",
  "antartica",
  "harry potter",
  "chennai super kings",
  "Data Structures and Algorithms",
  "I solemnly swear I am up to no good",
  "I have always wanted to use that spell"
];

export function TrieNode(ch) {
  this.children = {};
  this.isEnd = false;
  this.words = [];
  this.ch = ch;
}

export function insert(word, root) {
  for (let ch of word) {
    ch = ch.toLowerCase();
    if (!root.children[ch]) {
      this.node = new TrieNode(ch);
      root.children[ch] = this.node;
    }
    root = root.children[ch];
    root.words.push(word);
  }
  root.isEnd = true;
  return;
}

export function search(word, root) {
  for (let ch of word) {
    ch = ch.toLowerCase();
    if (root.children[ch]) {
      root = root.children[ch];
    } else {
      return [];
    }
  }
  return root.words;
}
