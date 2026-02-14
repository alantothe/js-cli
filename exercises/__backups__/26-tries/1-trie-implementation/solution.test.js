const { Trie } = require('./solution.js');

describe('Trie (Prefix Tree)', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  describe('insert and search', () => {
    it('should insert and find words', () => {
      trie.insert('apple');
      expect(trie.search('apple')).toBe(true);
    });

    it('should not find non-inserted words', () => {
      trie.insert('apple');
      expect(trie.search('app')).toBe(false);
    });

    it('should handle multiple words', () => {
      trie.insert('apple');
      trie.insert('app');
      expect(trie.search('apple')).toBe(true);
      expect(trie.search('app')).toBe(true);
    });

    it('should be case-sensitive', () => {
      trie.insert('Hello');
      expect(trie.search('hello')).toBe(false);
      expect(trie.search('Hello')).toBe(true);
    });
  });

  describe('startsWith', () => {
    it('should find existing prefix', () => {
      trie.insert('apple');
      expect(trie.startsWith('app')).toBe(true);
    });

    it('should return false for non-existing prefix', () => {
      trie.insert('apple');
      expect(trie.startsWith('ban')).toBe(false);
    });

    it('should find full word as prefix', () => {
      trie.insert('apple');
      expect(trie.startsWith('apple')).toBe(true);
    });
  });

  describe('getWordsWithPrefix', () => {
    it('should return all words with prefix', () => {
      trie.insert('apple');
      trie.insert('app');
      trie.insert('application');
      trie.insert('banana');
      const result = trie.getWordsWithPrefix('app');
      expect(result.sort()).toEqual(['app', 'apple', 'application']);
    });

    it('should return empty array for no matches', () => {
      trie.insert('apple');
      expect(trie.getWordsWithPrefix('xyz')).toEqual([]);
    });

    it('should return all words with empty prefix', () => {
      trie.insert('a');
      trie.insert('b');
      const result = trie.getWordsWithPrefix('');
      expect(result.sort()).toEqual(['a', 'b']);
    });
  });
});
