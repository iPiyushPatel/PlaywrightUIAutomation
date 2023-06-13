import LoginDto from '../data-objects/LoginDto';

class LoginData {
    validLoginData() {
        const loginData = LoginDto;
        loginData.email = 'AutomationUser@mailinator.com';
        loginData.password = 'automation@123';
        return loginData;
    }

    invalidLoginData() {
        const loginData = LoginDto;
        loginData.email = 'AutomationUser';
        loginData.password = 'automation';
        return loginData;
    }

    validEmailAndInvalidPassword() {
        const loginData = LoginDto;
        loginData.email = 'AutomationUser@mailinator.com';
        loginData.password = 'automation';
        return loginData;
    }

    invalidEmailAndValidPassword() {
        const loginData = LoginDto;
        loginData.email = 'AutomationUser';
        loginData.password = 'automation@123';
        return loginData;
    }

    lessThanMinChar() {
        const loginData = LoginDto;
        loginData.email = 'Au';
        loginData.password = 'au';
        return loginData;
    }

    moreThanMaxChar() {
        const loginData = LoginDto;
        loginData.email = 'When people think about using artificial intelligence (AI) for writing, they immediately jump to 1500-word articles and lengthy social media posts. And yes, these are use cases that AI writing assistants can help with.';
        loginData.password = 'When people think about using artificial intelligence (AI) for writing, they immediately jump to 1500-word articles and lengthy social media posts. And yes, these are use cases that AI writing assistants can help with.';
        return loginData;
    }
}

export default new LoginData();
