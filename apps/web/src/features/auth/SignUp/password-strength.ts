import {FeedbackType, zxcvbn, zxcvbnOptions} from '@zxcvbn-ts/core'
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common'
import * as zxcvbnFrPackage from '@zxcvbn-ts/language-fr'


export type PasswordStrength = {
    score: number;
    feedback: FeedbackType | undefined;
}
const options = {
    translations: zxcvbnFrPackage.translations,
    graphs: zxcvbnCommonPackage.adjacencyGraphs,
    dictionary: {
        ...zxcvbnCommonPackage.dictionary,
        ...zxcvbnFrPackage.dictionary,
    },
}

zxcvbnOptions.setOptions(options)

export const calculatePasswordStrength = (password: string): PasswordStrength => {
    if (!password) return {
        score: 0,
        feedback: undefined
    }
    const result = zxcvbn(password)
    return {
        score: result.score,
        feedback: result.feedback
    }
}
