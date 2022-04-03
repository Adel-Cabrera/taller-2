class CalculatorController {
  constructor() {
    this.renderResponse = this.renderResponse.bind(this);
  }

  renderHome(req, res) {
    res.render("interes");
  }

  calcularInteres(tasa, capital, anios) {
    console.log("capital", capital);
    console.log("tasa", tasa);
    console.log("anios", anios);

    return capital * (tasa / 100) * anios;
  }

  renderResponse(req, res) {
    const { tasa, capital, anios } = req.body;
    console.log(tasa, capital, anios);

    const total = this.calcularInteres(tasa, capital, anios);
    console.log("total", total);

    res.render("interes", {
      tasa,
      capital,
      anios,
      total,
    });
  }

  renderNotFound(req, res) {
    res.render("404");
  }
}

module.exports = CalculatorController;
