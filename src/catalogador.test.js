import catalogar from "./catalogar";

describe("Catalogar", () => {
  it("deberia salir Fizz por ser multiplo de 3", () => {
    expect(catalogar(12)).toEqual("Fizz");
  });
  it("deberia salir Buzz por ser multiplo de 5", () => {
    expect(catalogar(10)).toEqual("Buzz");
  });
  it("deberia salir FizzBuzz por ser multiplo de 3 y 5", () => {
    expect(catalogar(15)).toEqual("FizzBuzz");
  });
  /*
  it("deberia salir el mismo numero si no es multiplo de 3 ni 5", () => {
    expect(catalogar(13)).toEqual(13);
  });
  it("deberia salir 0 si el numero es 0", () => {
    expect(catalogar(0)).toEqual(0);
  });*/
});


