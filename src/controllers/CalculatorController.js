class CalculatorController {
  constructor() {
    this.renderResponse = this.renderResponse.bind(this);
  }

  renderHome(req, res) {
    res.render("interes");
  }

  calcularInteres(tasa, capital, anios) {
    return capital * (tasa / 100) * anios;
  }

  renderResponse(req, res) {
    const { tasa, capital, anios } = req.body;

    const total = this.calcularInteres(tasa, capital, anios);

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
