import React from "react";

import Container from "@material-ui/core/Container";

import { Card } from "./components/Card";

export const Home = () => {
  return (
    <Container maxWidth="sm">
      <Card
        title="Saldo da conta"
        values={["R$ 150,00"]}
        btnText="Call to action"
      />

      <Card
        title="Cotação do Bitcoin hoje (data)"
        values={["Compra: R$ 130", "Venda: R$ 150"]}
        btnText="Call to action"
      />

      <Card
        title="Volume total de bitcoins hoje (data)"
        values={["Comprado: R$ 160", "Venda: R$ 180"]}
        btnText="Call to action"
      />

      <Card
        title="Histórico de compra e venda bitcoin"
        values={["Gráfico com valor a cada 10 minutos"]}
        btnText="Call to action"
      />

      <Card
        title="Tabela de posição dos investimentos"
        values={[
          "Data de compra, valor investido, valor do btc momento, % variação do preço do bitcoin, valor bruto atual do investimento",
        ]}
        btnText="Call to action"
      />
    </Container>
  );
};
