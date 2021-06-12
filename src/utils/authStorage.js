import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }
/* 
  getAccessToken = async() => {
    // Get the access token for the storage   
    const value = await AsyncStorage.getItem(`${this.namespace}:token`);
    return value;
  };
 */
  async getAccessToken() {
    const value = await AsyncStorage.getItem(
      `${this.namespace}:token`,
    );

    return value ? JSON.parse(value) : [];
  }
  

 /*  setAccessToken= async(token) => {
    // Add the access token to the storage  
    await AsyncStorage.setItem(`${this.namespace}:token`,
      JSON.stringify(token),
    );
  }; */
  async setAccessToken(token) {
    await AsyncStorage.setItem(`${this.namespace}:token`,
    JSON.stringify(token),
    );
  }

/*   removeAccessToken = async() => {
    // Remove the access token from the storage   
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }; */
  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;