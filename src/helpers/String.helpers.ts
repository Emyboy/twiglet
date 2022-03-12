

export class StringHelpers {
    /**
     * @description This removes all special characters from a string including numbers
     * @param str string
     * @returns 
     */
    static removeAllSpecialCharacters(str:string):string{
        return str.replace(/[^a-zA-Z ]/g, '')
    }
}

