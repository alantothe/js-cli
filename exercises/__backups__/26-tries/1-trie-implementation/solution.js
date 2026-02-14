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
    // TODO: Initialize children map and end-of-word flag
  }
}

class Trie {
  constructor() {
    // TODO: Initialize root node
  }

  // Insert a word into the trie
  insert(word) {
    // TODO: Create nodes for each character
  }

  // Return true if the word exists in the trie
  search(word) {
    // TODO: Traverse and check end-of-word
  }

  // Return true if any word starts with the given prefix
  startsWith(prefix) {
    // TODO: Traverse and check if prefix path exists
  }

  // Return all words that start with the given prefix
  getWordsWithPrefix(prefix) {
    // TODO: Find prefix node, then DFS to collect all words
  }
}

module.exports = { TrieNode, Trie };
