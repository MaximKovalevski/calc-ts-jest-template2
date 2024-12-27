import { calculatePasswordStrength } from "../src/password-strength";

describe("Tests for calculatePasswordStrength method", () => {
    const VERY_WEAK: string = "Very Weak"; //strange score <= 2
    const WEAK: string = "Weak"; //strange score = 3
    const MODERATE: string = "Moderate"; //strange score = 4
    const STRONG: string = "Strong"; //strange score >= 5

    describe(`tests for ${VERY_WEAK} passwords `, () => {
        test("Check for empty password", () => {
            expect(calculatePasswordStrength("")).toBe(VERY_WEAK);
        });

        test("Check password with multiple digits", () => {
            expect(calculatePasswordStrength("1234567890")).toBe(VERY_WEAK);
        });

        test("Check password with multiple lowercase letters", () => {
            expect(calculatePasswordStrength("test")).toBe(VERY_WEAK);
        });

        test("Check password with multiple uppercase letters", () => {
            expect(calculatePasswordStrength("TEST")).toBe(VERY_WEAK);
        });

        test("Check password with multiple special characters", () => {
            expect(calculatePasswordStrength("###$$$@@@")).toBe(VERY_WEAK);
        });

        test("Check password with length equal 8 of lowercase letters", () => {
            expect(calculatePasswordStrength("abcdefgh")).toBe(VERY_WEAK);
        });

        test("Check password with length equal 8 of digits", () => {
            expect(calculatePasswordStrength("01234567")).toBe(VERY_WEAK);
        });

        test("Check when password has digit and lowercase letter", () => {
            expect(calculatePasswordStrength("a1")).toBe(VERY_WEAK);
        });

        test("Check when password has digit and uppercase letter", () => {
            expect(calculatePasswordStrength("B2")).toBe(VERY_WEAK);
        });

        test("Check when password has lowercase letter and uppercase letter", () => {
            expect(calculatePasswordStrength("aA")).toBe(VERY_WEAK);
        });

        test("Check when password has lowercase letter and special characters", () => {
            expect(calculatePasswordStrength("#b")).toBe(VERY_WEAK);
        });

        test("Check when password has uppercase letter special character", () => {
            expect(calculatePasswordStrength("#C")).toBe(VERY_WEAK);
        });
    });

    describe(`tests for ${WEAK} passwords `, () => {
        test("Check password with lowercase and uppercase letters, digit ", () => {
            expect(calculatePasswordStrength("Iq8")).toBe(WEAK);
        });

        test("Check password with lowercase and uppercase letters, special character ", () => {
            expect(calculatePasswordStrength("Iq!")).toBe(WEAK);
        });

        test("Check password with lowercase, special character, digit ", () => {
            expect(calculatePasswordStrength("@7e")).toBe(WEAK);
        });

        test("Check password with uppercase, special character, digit ", () => {
            expect(calculatePasswordStrength("P4+")).toBe(WEAK);
        });

        test("Check password with length more than 12 of lowercase letters", () => {
            expect(calculatePasswordStrength("abcdefghijklmnopqrstuvwxyz")).toBe(
                WEAK,
            );
        });

        test("Check password with length more than 12 of lowercase letters", () => {
            expect(calculatePasswordStrength("abcdefgh+")).toBe(WEAK);
        });

        test("Check password with length equal 8 of lowercase letters and one special character", () => {
            expect(calculatePasswordStrength("-01234567")).toBe(WEAK);
        });
    });

    describe(`tests for ${MODERATE} passwords `, () => {
        test("Check password with length less stan 8 and has all characters", () => {
            expect(calculatePasswordStrength("Test#05")).toBe(MODERATE);
        });

        test("Check password with length equal 8 and has uppercase, lowercase and special characters", () => {
            expect(calculatePasswordStrength("@Marek.V")).toBe(MODERATE);
        });

        test("Check password with length equal 8 and has uppercase, digit, special symbol", () => {
            expect(calculatePasswordStrength("ABCDEF1!")).toBe(MODERATE);
        });

        test("Check password with length equal 8 and has lowercase, digit, special symbol", () => {
            expect(calculatePasswordStrength("abcdef1!")).toBe(MODERATE);
        });

        test("Check password with length more than 12 and contains digit", () => {
            expect(calculatePasswordStrength("abcdefghijklmnopqrstuvwxyz7")).toBe(
                MODERATE,
            );
        });

        test("Check password with length more than 12 and contains one uppercase letter", () => {
            expect(calculatePasswordStrength("abcdefghijklmnopqrstuvwxyzA")).toBe(
                MODERATE,
            );
        });

        test("Check password with length more than 12 and contains special symbol", () => {
            expect(calculatePasswordStrength("abcdefghijklmnopqrstuvwxyz+")).toBe(
                MODERATE,
            );
        });
    });

    describe(`tests for ${STRONG} passwords `, () => {
        test("Check password with length equal 8 and contains all characters", () => {
            expect(calculatePasswordStrength("@Marek.8")).toBe(STRONG);
        });
        test("Check password with length more than 12 and contains all characters", () => {
            expect(calculatePasswordStrength("Homework_08@test.tl")).toBe(STRONG);
        });

        test("Check password with length more than 12 and contains letters and digit", () => {
            expect(calculatePasswordStrength("A1b2C3d4E5f6G7h8I9")).toBe(STRONG);
        });

        test("Check password with length more than 12 and contains letters and special character", () => {
            expect(calculatePasswordStrength("A.bcdefghijklmnopqrstuvwxy.Z")).toBe(
                STRONG,
            );
        });
    });
});