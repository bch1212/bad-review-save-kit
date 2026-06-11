const fs = require('fs');

const [,, inputPath, outputPath] = process.argv;
if (!inputPath || !outputPath) {
  console.error('Usage: node bin/generate_kit.js samples/sample-input.json reports/generated-sample-kit.md');
  process.exit(1);
}
const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
const templates = {
  delay: r => `Hi ${r.reviewer_name}, thank you for taking the time to share this. I’m sorry the timing and communication did not meet the standard we aim for. We’re reviewing what happened on our side so we can tighten the process. If you’re open to it, please contact ${data.contact_method} and ask for ${data.owner_name} so we can understand the details and try to make this right.`,
  quality: r => `Hi ${r.reviewer_name}, I’m sorry the finished work did not feel right to you. That is not the experience we want customers to have. We’d appreciate the chance to look at the details and see what we can reasonably correct. Please reach ${data.owner_name} at ${data.contact_method} with your job/date details.`,
  price: r => `Hi ${r.reviewer_name}, I’m sorry the pricing or scope was not clear enough. We try to be upfront, and it sounds like we missed an opportunity to explain things better. Please reach out to ${data.contact_method} so we can review the invoice/scope and answer any questions.`,
  staff: r => `Hi ${r.reviewer_name}, thank you for flagging this. Courtesy matters to us, and I’m sorry your interaction felt frustrating. We’re addressing this internally and would like to learn more so we can improve. Please contact ${data.owner_name} at ${data.contact_method} if you’re willing to share details.`,
  generic: r => `Hi ${r.reviewer_name}, I’m sorry to see this rating. We’d like to understand what happened and see if there’s a way to improve the experience. Please reach ${data.owner_name} at ${data.contact_method} with any details you’re comfortable sharing.`
};
function responseFor(review) {
  return (templates[review.theme] || templates.generic)(review);
}
const now = new Date().toISOString();
let md = `# Bad Review Save Kit - ${data.business_name}\n\nGenerated: ${now}\n\nCommunication drafts only; owner should verify facts before posting. No review outcome guarantees.\n\n## Public review replies\n\n`;
for (const review of data.reviews) {
  md += `### ${review.rating}-star review from ${review.reviewer_name}\n\n> ${review.review_text}\n\n**Suggested public response:**\n\n${responseFor(review)}\n\n`;
}
md += `## Private recovery message\n\nSubject: Following up from ${data.business_name}\n\nHi {{customer_name}}, this is ${data.owner_name} from ${data.business_name}. I saw your review and I’m sorry the experience did not meet expectations. I’d like to understand what happened and see what we can reasonably do to make it better. If you’re open to it, please reply here or contact ${data.contact_method}.\n\n## 30-day review rhythm\n\n- Today: post calm public replies to each unanswered review.\n- This week: contact reviewers privately when contact details are available.\n- Weekly: ask 5 satisfied recent customers for an honest review using neutral wording.\n- Monthly: identify one recurring complaint and add a process fix.\n`;
fs.mkdirSync(require('path').dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, md);
console.log(`Wrote ${outputPath}`);
