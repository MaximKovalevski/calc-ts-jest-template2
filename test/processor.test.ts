import { User } from '../src/User'
import { Processor } from '../src/Processor'

let user: User
let processor: Processor

beforeEach(() => {
    user = new User('Max', 'Kovalevski', 41, '123456789', 'Tallinn')
    processor = new Processor()
})

test('younger than 18 years old', (): void => {
    user.age = 17
    let hasConsent = processor.isAgeAcceptableForConsent(user)
    expect(hasConsent).toBeFalsy()
})

test('18 years user', (): void => {
    user.age = 18
    let hasConsent = processor.isAgeAcceptableForConsent(user)
    expect(hasConsent).toBeTruthy()
})

test('older than 18 years old', (): void => {
    let hasConsent = processor.isAgeAcceptableForConsent(user)
    expect(hasConsent).toBeTruthy()
})

test('revoke consent from user', (): void => {
    user.consentGiven = true
    processor.revokeConsent(user)
    expect(user.consentGiven).toBeFalsy()
})