const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function convertToPDF() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Read the HTML file
    const htmlPath = path.join(__dirname, 'brand-deck.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Set content
    await page.setContent(htmlContent, {
        waitUntil: 'networkidle0'
    });
    
    // Wait for fonts to load
    await page.evaluateHandle(() => document.fonts.ready);
    
    // Generate PDF with proper settings for presentation
    await page.pdf({
        path: 'brand-deck.pdf',
        format: 'A4',
        landscape: true,
        printBackground: true,
        margin: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        },
        preferCSSPageSize: false,
        displayHeaderFooter: false
    });
    
    await browser.close();
    
    console.log('PDF created successfully: brand-deck.pdf');
}

convertToPDF().catch(console.error);
