const checkEmail = (email: string) => {
	if (email === '') {
		return false
	} else if (!isEmail(email)) {
		return false
	} else {
		return email
	}
}

const isEmail = (email: string) => {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	)
}

export default checkEmail