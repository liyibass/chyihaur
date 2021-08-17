import axios from 'axios'

export async function emitContact(variables) {
    const query = `
			mutation addNewContact(
				$name: String
				$company: String
				$line: String
				$phone: String
				$email: String
				$business: String
				$other: String
		) {
				createContact(
						data: {
								name: $name
								company: $company
								line: $line
								phone: $phone
								email: $email
								business: $business
								other: $other
						}
				) {
						name
						company
				}
		}`

    try {
        const result = await fireGraphQLRequest(query, variables)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

function fireGraphQLRequest(query, variables) {
    return axios({
        url: `https://chyihaur-cms-01.herokuapp.com/admin/api`,
        method: 'post',
        data: {
            query,
            variables,
        },
        headers: {
            'content-type': 'application/json',
        },
    })
        .then((result) => {
            const { data, errors } = result.data
            if (errors) {
                // GraphQL errors are optional,
                // error reason contains access denied
                throw new Error(errors[0].message)
            } else {
                return data
            }
        })
        .catch((errors) => {
            // respond to a network error
            throw errors
        })
}
