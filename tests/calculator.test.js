const { calculate } = require("../calculator");

describe("Tests de la calculatrice avec Jest", () => {
  // L’addition
  test("calculer correctement une addition", () => {
    expect(calculate("2 + 3")).toBe(5);
    expect(calculate("10 + 20 + 30")).toBe(60);
  });

  // La soustraction
  test("calculer correctement une soustraction", () => {
    expect(calculate("5 - 3")).toBe(2);
    expect(calculate("10 - 15")).toBe(-5);
  });

  //  La multiplication
  test("calculer correctement une multiplication", () => {
    expect(calculate("3 * 4")).toBe(12);
    expect(calculate("0 * 5")).toBe(0);
  });

  // La division
  test("calculer correctement une division", () => {
    expect(calculate("6 / 3")).toBe(2);
    expect(calculate("5 / 2")).toBe(2.5);
  });

  //  Les priorités (2+3*4)
  test("respecter les priorités des opérateurs (multiplication avant addition)", () => {
    expect(calculate("2+3*4")).toBe(14);
  });

  // Les parenthèses ((2+3)*4)
  test("forcer la priorité avec des parenthèses", () => {
    expect(calculate("(2+3)*4")).toBe(20);
  });

  //  Le comportement en cas d'expression invalide (2+bad)
  test("afficher une erreur en cas d'expression invalide ", () => {
    expect(() => {
      calculate("2+bad");
    }).toThrow("Expression invalide");
  });
  //  test pour cas de chaîne vide
  test("afficher une erreur en cas de chaîne vide", () => {
    expect(() => {
      calculate("");
    }).toThrow("Expression invalide");
  });
});
