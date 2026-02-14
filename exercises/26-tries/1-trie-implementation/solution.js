/**
 * ╔══════════════════════════════════════════╗
 * ║         Trie (Prefix Tree)               ║
 * ╚══════════════════════════════════════════╝
 *
 * A Trie is a tree for storing strings where each node represents a character.
 * Used for autocomplete, spell checking, and prefix-based search.
 */

class TrieNode {
  constructor() {
    this.children = {};      // Map of character -> TrieNode
    this.isEndOfWord = false; // Marks end of a complete word
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the trie
  insert(word) {
    let current = this.root;

    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }

    current.isEndOfWord = true;
  }

  // Return true if the word exists in the trie
  search(word) {
    let current = this.root;

    for (let char of word) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }

    return current.isEndOfWord;
  }

  // Return true if any word starts with the given prefix
  startsWith(prefix) {
    let current = this.root;

    for (let char of prefix) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }

    return true;
  }

  // Return all words that start with the given prefix
  getWordsWithPrefix(prefix) {
    let current = this.root;

    // Step 1: Traverse to the end of the prefix
    for (let char of prefix) {
      if (!current.children[char]) {
        return [];
      }
      current = current.children[char];
    }

    const results = [];

    // Step 2: DFS from prefix node
    const dfs = (node, path) => {
      if (node.isEndOfWord) {
        results.push(path);
      }

      for (let char in node.children) {
        dfs(node.children[char], path + char);
      }
    };

    dfs(current, prefix);

    return results;
  }
}

module.exports = { TrieNode, Trie };
