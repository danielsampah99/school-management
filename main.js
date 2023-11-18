class LoginValidation {
    constructor() {
        this.loginForm = document.getElementById('loginForm')
        this.emailAddress = document.getElementById('emailAddress')
        this.password = document.getElementById('password')
        this.togglePasswordCheckbox = document.getElementById('togglePassword')
        
        this.loginForm.addEventListener('submit', this.validateLoginForm.bind(this))
        this.togglePasswordCheckbox.addEventListener('change', this.checkButtonToggled.bind(this))
    }

    checkButtonToggled() {
        const isPasswordVisible = this.togglePasswordCheckbox.checked

        if (isPasswordVisible) {
            this.password.setAttribute('type', 'text')
        } else {
            this.password.setAttribute('type', 'password')
        }
        
    }

    validateEmailAddress (emailAddress) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(emailAddress)
    }

    validatePassword(password) {
        const minLength = 8
        const hasUpperCase = /[A-Z]/.test(password)
        const hasLowerCase = /[a-z]/.test(password)
        const hasNumber = /[0-9]/.test(password)
        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber
    }

    validateLoginForm(event) {
        event.preventDefault();

        if (!this.validateEmailAddress(this.emailAddress.value)) {
            alert ('Invalid Admin Email Address Entered!!!')
        }
        if (!this.validatePassword(this.password.value)) {
            alert('Invalid Admin password Entered!!!')
        }
        this.loginForm.submit()
        alert('Login Successful')
    }
}

const loginPage = new LoginValidation()