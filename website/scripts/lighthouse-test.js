import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';

async function runLighthouse() {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {logLevel: 'info', output: 'html', onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'], port: chrome.port};
  const runnerResult = await lighthouse('http://localhost:4321', options);

  // Report as HTML
  console.log('Report is done for', runnerResult.lhr.finalUrl);
  console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);
  console.log('Accessibility score was', runnerResult.lhr.categories.accessibility.score * 100);
  console.log('Best Practices score was', runnerResult.lhr.categories['best-practices'].score * 100);
  console.log('SEO score was', runnerResult.lhr.categories.seo.score * 100);

  await chrome.kill();
}

runLighthouse();