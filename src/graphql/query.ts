export const query = `#graphql
    query User($page: Int, $pageSize: Int) {
        user(page: $page, pageSize: $pageSize) {
        page
        pageSize
        totalRecords
        totalPages
        data {
            id
            userTier
            profile {
                firstName
                lastName
                lendsqrId
                organization
                username
                email
                status
                gender
                phoneNumber
                avatar
                createdAt
            }
            bankDetails {
                currency
                bank
                accountNumber
                accountBalance
                bvn
            }
            guarantor {
                firstName
                lastName
                phoneNumber
                email
                relationship
            }
            socials {
                facebook
                instagram
                twitter
            }
            education {
                level
                employmentStatus
                sector
                duration
                officeEmail
                loanRepayment
                monthlyIncome
            }
        }
        }
    }
`;
