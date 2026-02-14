# Trie (Prefix Tree)

## Overview
A Trie is a tree-like data structure that stores strings character by character. It enables O(m) lookup where m is the word length, and excels at prefix-based operations like autocomplete.

## Learning Objectives
- Implement a Trie with insert, search, and prefix operations
- Collect all words matching a prefix using DFS
- Understand TrieNode structure (children map + isEnd flag)

## Concepts
1. **TrieNode**: Each node has a map of children and an end-of-word flag
2. **Insert**: Walk/create nodes for each character, mark last as end
3. **Search**: Walk nodes for each character, check end flag
4. **Prefix Search**: Walk nodes for prefix, then DFS to find all complete words

## Run Tests
```bash
npm test -- "exercises/26-tries/1-trie-implementation/solution.test.js"
```

## Difficulty: Medium
