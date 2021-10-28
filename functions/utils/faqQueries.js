const GET_FAQS = `
# Write your query or mutation here
query {
    allFAQType {
        data {
            faqType
            faqs {
                data {
                    question
                    answer
                }
            }
        }
    }
}`;

module.exports = {
    GET_FAQS,
};