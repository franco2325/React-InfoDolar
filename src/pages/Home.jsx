import React, { useState, useEffect } from 'react'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import Button from '../components/Button'

const Home = () => {
  const [apidata, setApidata] = useState({})
  const [bankData, setBankData] = useState({})

  useEffect(() => {
    fetch('https://criptoya.com/api/dolar')
      .then((response) => response.json())
      .then((data) => {
        setApidata(data)
      })
  }, [])

  const fetchBankData = (bank) => {
    fetch(`https://criptoya.com/api/${bank}`)
      .then((response) => response.json())
      .then((data) => {
        setBankData(data)
      })
  }

  return (
    <div className='container main'>
      <Section>
        <SectionBody>
          <SectionTitle> Info dolar</SectionTitle>

          <table>
            <thead>
              <tr>
                <th>Informacion</th>
                <th>Valor a la venta</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>Dolar oficial (Cotización Banco Nación) </td>
                <td>{apidata.oficial}</td>
              </tr>
              <tr>
                <td>
                  {' '}
                  Dolar Solidario (Cotización con impuesto PAIS + Imp.
                  GANANCIAS)
                </td>
                <td>{apidata.solidario}</td>
              </tr>
              <tr>
                <td> Dolar Blue (Dólar Informal)</td>
                <td>{apidata.blue}</td>
              </tr>
              <tr>
                <td>Dólar Contado con Bitcoin</td>
                <td>{apidata.ccb}</td>
              </tr>
              <tr>
                <td> Dólar Bolsa (calculado con el bono AL30)</td>
                <td>{apidata.mep}</td>
              </tr>
              <tr>
                <td>
                  {' '}
                  Dólar Contado con Liquidación (calculado con el bono AL30)
                </td>
                <td>{apidata.ccl}</td>
              </tr>
              <tr>
                <td> Dólar Bolsa (calculado con el bono GD30)</td>
                <td>{apidata.mepgd30}</td>
              </tr>
              <tr>
                <td> Dolar Blue (Dólar Informal)</td>
                <td>{apidata.cclgd30}</td>
              </tr>
              <tr>
                <td>
                  {' '}
                  Dólar Contado con Liquidación (calculado con el bono GD30)
                </td>
                <td>{apidata.blue}</td>
              </tr>
            </thead>
          </table>

          <SectionTitle> Info Bancos</SectionTitle>
          <div className='bank__info'>
            <div className='buttons'>
              <Button
                size='sm'
                animate={true}
                onClick={() => fetchBankData('bna')}
              >
                Banco Nacion
              </Button>
              <Button
                size='sm'
                animate={true}
                onClick={() => fetchBankData('ciudad')}
              >
                Banco Ciudad
              </Button>
              <Button
                size='sm'
                animate={true}
                onClick={() => fetchBankData('bbva')}
              >
                Banco BBVA
              </Button>
              <Button
                size='sm'
                animate={true}
                onClick={() => fetchBankData('hsbc')}
              >
                Banco HSBC
              </Button>
              <Button
                size='sm'
                animate={true}
                onClick={() => fetchBankData('galicia')}
              >
                Banco galicia
              </Button>
              <Button
                size='sm'
                animate={true}
                onClick={() => fetchBankData('macro')}
              >
                Banco Macro
              </Button>
              <Button
                size='sm'
                animate={true}
                onClick={() => fetchBankData('patagonia')}
              >
                Banco Patagonia
              </Button>
              <Button
                size='sm'
                animate={true}
                onClick={() => fetchBankData('bapro')}
              >
                Banco Provincia
              </Button>
              <Button
                size='sm'
                animate={true}
                onClick={() => fetchBankData('santander')}
              >
                Banco Santander
              </Button>
              <Button
                size='sm'
                animate={true}
                onClick={() => fetchBankData('supervielle')}
              >
                Banco Supervielle
              </Button>
            </div>
            <div className='bank__info__dolar'>
              <table>
                <thead>
                  <tr>
                    <th>Compra sin impuesto pais</th>
                    <th>Compra con impuestos pais y ganancias</th>
                    <th>Venta</th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <td>{bankData.ask}</td>
                    <td>{bankData.totalAsk}</td>
                    <td>{bankData.bid}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </SectionBody>
      </Section>
    </div>
  )
}

export default Home
