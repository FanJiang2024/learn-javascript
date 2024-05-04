/**
 * 从标准输入中读取文本，计算每个字母出现的频率（过滤掉低于1%的字母）
 * 调用：node charfreq.js < example.txt
 */

class DefaultMap extends Map {
  constructor(defaultValue) {
    super();
    this.defaultValue = defaultValue;
  }

  get(key) {
    if (this.has(key)) {
      return super.get(key);
    } else {
      this.set(key, this.defaultValue);
      return this.defaultValue;
    }
  }
}

class Histogram {
  constructor(defaultValue) {
    this.letterCounts = new DefaultMap(defaultValue);
    this.totalLetters = 0;
  }

  add(text) {
    const str = text.replace(/\s/g, "").toUpperCase();
    for (let char of str) {
      this.letterCounts.set(char, this.letterCounts.get(char) + 1);
      this.totalLetters += 1;
    }
  }

  toString() {
    const letterCounts = [...this.letterCounts];
    letterCounts.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : 1;
      } else {
        return a[1] < b[1] ? 1 : -1;
      }
    });

    return letterCounts
      .map((item) => [item[0], (item[1] / this.totalLetters) * 100])
      .filter((item) => item[1] > 1)
      .map(
        ([char, percent]) =>
          `${char}: ${"#".repeat(Math.round(percent))} ${percent.toFixed(2)}%`
      )
      .join("\n");
  }
}

async function test() {
  process.stdin.setEncoding("utf-8"); // 读取Unicode字符串，而非字节

  const histogram = new Histogram(0);
  for await (let text of process.stdin) {
    histogram.add(text);
  }
  return histogram;
}

test().then((h) => console.log(h.toString()));
