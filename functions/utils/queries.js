/* FAQs QUERIES */
const GET_FAQS = `
query {
    allFAQType {
        data {
            _id
            faqType
            faqs {
                data {
                    _id
                    question
                    answer
                }
            }
        }
    }
}`;

/* POPULAR ITEMS QUERIES */
const GET_POPULAR_ITEMS = `
query {
    allPopularItemType {
        data {
            _id
            popularType
            popularTypeLogo
            popularUrls {
                data {
                    _id
                    url
                }
            }
        }
    }
}`;

/* HELP DESK SECTIONS QUERIES */
const GET_HELP_DESK_SECTIONS = `
query {
    allHelpDeskSections {
        data {
            _id
            sectionName
            sectionLogo
            sectionUrlLogo
            helpDeskSectionIntroLinks {
                data {
                    _id
                    url
                }
            }
        }
    }
}`;

module.exports = {
    GET_FAQS,
    GET_POPULAR_ITEMS,
    GET_HELP_DESK_SECTIONS,
};