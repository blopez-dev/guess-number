export const guessChecks = {
    SUCCESS: 1,
    LOWER: 2,
    BIGGER: 3,
};

export const guessMessages = {
    [guessChecks.SUCCESS]: 'Has acertado!',
    [guessChecks.LOWER]: 'El número es más grande',
    [guessChecks.BIGGER]: 'El número es más pequeño',
};