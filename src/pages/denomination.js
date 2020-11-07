import React, { useState } from "react";

function Denomination() {
  const [num, setNum] = useState({
    inputs: null,
    visible: false,
  });
  const [result, setResult] = useState({
    ratusRibu: null,
    limaPuluh: null,
    duaPuluhRibu: null,
    sepuluhRibu: null,
    limaRibu: null,
    duaRibu: null,
    seribu: null,
    limaRatus: null,
    duaRatus: null,
    seratus: null,
    sisa: null,
  });
  const [rp, setRp] = useState(false);
  const [filters, setFilters] = useState(false);
  const [amount, setAmount] = useState({
    min: false,
    max: false,
  });

  function onSubmits() {
    filterStr();
  }

  function rupiah(amount) {
    var number_string = amount.toString(),
      sisa = number_string.length % 3,
      rupiah = number_string.substr(0, sisa),
      ribuan = number_string.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
      let separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }
    setRp(rupiah);
  }

  function filterStr() {
    // let numbers = /^[0-9]*$/;
    // if (numbers.test(num.inputs)) {
    //   calculate(num.inputs);
    //   setNum({ visible: true });
    //   rupiah(num.inputs);
    //   setFilters(false);
    // } else {
    //   setFilters(true);
    // }
    let numbers = /^[0-9]*$/;
    if (numbers.test(num.inputs)) {
      if (num.inputs < 99) {
        setAmount({min: true});
        setFilters(false);
      } else if (num.inputs > 1000000000) {
        setAmount({max :true});
        setFilters(false);
      } else {
        calculate(num.inputs);
        setNum({ visible: true });
        rupiah(num.inputs);
        setFilters(false);
        setAmount({min:false, max: false});
      }
    } else {
      setFilters(true);
      setAmount({min:false, max: false});
    }
  }

  function onChanges(e) {
    setNum({ inputs: parseInt(e.target.value) });
    setResult({
      ratusRibu: null,
      limaPuluh: null,
      duaPuluhRibu: null,
      sepuluhRibu: null,
      limaRibu: null,
      duaRibu: null,
      seribu: null,
      limaRatus: null,
      duaRatus: null,
      seratus: null,
      sisa: null,
    });
  }

  function calculate(str) {
    const a = 100000;
    const b = 50000;
    const c = 20000;
    const d = 10000;
    const e = 5000;
    const f = 2000;
    const g = 1000;
    const h = 500;
    const i = 200;
    const j = 100;

    if (str % a < a) {
      let str1 = str % a;
      setResult({ ratusRibu: Math.floor(str / a), sisa: str % a });
      if (str1 % b < b) {
        let str2 = str1 % b;
        setResult({
          ratusRibu: Math.floor(str / a),
          limaPuluh: Math.floor(str1 / b),
          sisa: str1 % b,
        });
        if (str2 % c < c) {
          let str3 = str2 % c;
          setResult({
            ratusRibu: Math.floor(str / a),
            limaPuluh: Math.floor(str1 / b),
            duaPuluhRibu: Math.floor(str2 / c),
            sisa: str2 % c,
          });
          if (str3 % d < d) {
            let str4 = str3 % d;
            setResult({
              ratusRibu: Math.floor(str / a),
              limaPuluh: Math.floor(str1 / b),
              duaPuluhRibu: Math.floor(str2 / c),
              sepuluhRibu: Math.floor(str3 / d),
              sisa: str3 % d,
            });
            if (str4 % e < e) {
              let str5 = str4 % e;
              setResult({
                ratusRibu: Math.floor(str / a),
                limaPuluh: Math.floor(str1 / b),
                duaPuluhRibu: Math.floor(str2 / c),
                sepuluhRibu: Math.floor(str3 / d),
                limaRibu: Math.floor(str4 / e),
                sisa: str4 % e,
              });
              if (str5 % f < f) {
                let str6 = str5 % f;
                setResult({
                  ratusRibu: Math.floor(str / a),
                  limaPuluh: Math.floor(str1 / b),
                  duaPuluhRibu: Math.floor(str2 / c),
                  sepuluhRibu: Math.floor(str3 / d),
                  limaRibu: Math.floor(str4 / e),
                  duaRibu: Math.floor(str5 / f),
                  sisa: str5 % f,
                });
                if (str6 % g < g) {
                  let str7 = str6 % g;
                  setResult({
                    ratusRibu: Math.floor(str / a),
                    limaPuluh: Math.floor(str1 / b),
                    duaPuluhRibu: Math.floor(str2 / c),
                    sepuluhRibu: Math.floor(str3 / d),
                    limaRibu: Math.floor(str4 / e),
                    duaRibu: Math.floor(str5 / f),
                    seribu: Math.floor(str6 / g),
                    sisa: str6 % g,
                  });
                  if (str7 % h < h) {
                    let str8 = str7 % h;
                    setResult({
                      ratusRibu: Math.floor(str / a),
                      limaPuluh: Math.floor(str1 / b),
                      duaPuluhRibu: Math.floor(str2 / c),
                      sepuluhRibu: Math.floor(str3 / d),
                      limaRibu: Math.floor(str4 / e),
                      duaRibu: Math.floor(str5 / f),
                      seribu: Math.floor(str6 / g),
                      limaRatus: Math.floor(str7 / h),
                      sisa: str7 % h,
                    });
                    if (str8 % i < i) {
                      let str9 = str8 % i;
                      setResult({
                        ratusRibu: Math.floor(str / a),
                        limaPuluh: Math.floor(str1 / b),
                        duaPuluhRibu: Math.floor(str2 / c),
                        sepuluhRibu: Math.floor(str3 / d),
                        limaRibu: Math.floor(str4 / e),
                        duaRibu: Math.floor(str5 / f),
                        seribu: Math.floor(str6 / g),
                        limaRatus: Math.floor(str7 / h),
                        duaRatus: Math.floor(str8 / i),
                        sisa: str8 % i,
                      });
                      if (str9 % j < j) {
                        let str10 = str9 % j;
                        setResult({
                          ratusRibu: Math.floor(str / a),
                          limaPuluh: Math.floor(str1 / b),
                          duaPuluhRibu: Math.floor(str2 / c),
                          sepuluhRibu: Math.floor(str3 / d),
                          limaRibu: Math.floor(str4 / e),
                          duaRibu: Math.floor(str5 / f),
                          seribu: Math.floor(str6 / g),
                          limaRatus: Math.floor(str7 / h),
                          duaRatus: Math.floor(str8 / i),
                          seratus: Math.floor(str9 / j),
                          sisa: str9 % j,
                        });
                        if (str10 !== 0) {
                          setResult({
                            ratusRibu: Math.floor(str / a),
                            limaPuluh: Math.floor(str1 / b),
                            duaPuluhRibu: Math.floor(str2 / c),
                            sepuluhRibu: Math.floor(str3 / d),
                            limaRibu: Math.floor(str4 / e),
                            duaRibu: Math.floor(str5 / f),
                            seribu: Math.floor(str6 / g),
                            limaRatus: Math.floor(str7 / h),
                            duaRatus: Math.floor(str8 / i),
                            seratus: Math.floor(str9 / j),
                            sisa: str10,
                          });
                        }
                      } else {
                        setResult({
                          ratusRibu: Math.floor(str / a),
                          limaPuluh: Math.floor(str1 / b),
                          duaPuluhRibu: Math.floor(str2 / c),
                          sepuluhRibu: Math.floor(str3 / d),
                          limaRibu: Math.floor(str4 / e),
                          duaRibu: Math.floor(str5 / f),
                          seribu: Math.floor(str6 / g),
                          limaRatus: Math.floor(str7 / h),
                          duaRatus: Math.floor(str8 / i),
                          sisa: str9 % j,
                        });
                      }
                    } else {
                      setResult({
                        ratusRibu: Math.floor(str / a),
                        limaPuluh: Math.floor(str1 / b),
                        duaPuluhRibu: Math.floor(str2 / c),
                        sepuluhRibu: Math.floor(str3 / d),
                        limaRibu: Math.floor(str4 / e),
                        duaRibu: Math.floor(str5 / f),
                        seribu: Math.floor(str6 / g),
                        limaRatus: Math.floor(str7 / h),
                        sisa: str8 % i,
                      });
                    }
                  } else {
                    setResult({
                      ratusRibu: Math.floor(str / a),
                      limaPuluh: Math.floor(str1 / b),
                      duaPuluhRibu: Math.floor(str2 / c),
                      sepuluhRibu: Math.floor(str3 / d),
                      limaRibu: Math.floor(str4 / e),
                      duaRibu: Math.floor(str5 / f),
                      seribu: Math.floor(str6 / g),
                      sisa: str7 % h,
                    });
                  }
                } else {
                  setResult({
                    ratusRibu: Math.floor(str / a),
                    limaPuluh: Math.floor(str1 / b),
                    duaPuluhRibu: Math.floor(str2 / c),
                    sepuluhRibu: Math.floor(str3 / d),
                    limaRibu: Math.floor(str4 / e),
                    duaRibu: Math.floor(str5 / f),
                    sisa: str6 % g,
                  });
                }
              } else {
                setResult({
                  ratusRibu: Math.floor(str / a),
                  limaPuluh: Math.floor(str1 / b),
                  duaPuluhRibu: Math.floor(str2 / c),
                  sepuluhRibu: Math.floor(str3 / d),
                  limaRibu: Math.floor(str4 / e),
                  duaRibu: Math.floor(str5 / f),
                  sisa: str5 % f,
                });
              }
            } else {
              setResult({
                ratusRibu: Math.floor(str / a),
                limaPuluh: Math.floor(str1 / b),
                duaPuluhRibu: Math.floor(str2 / c),
                sepuluhRibu: Math.floor(str3 / d),
                limaRibu: Math.floor(str4 / e),
                sisa: str4 % e,
              });
            }
          } else {
            setResult({
              ratusRibu: Math.floor(str / a),
              limaPuluh: Math.floor(str1 / b),
              duaPuluhRibu: Math.floor(str2 / c),
              sepuluhRibu: Math.floor(str3 / d),
              sisa: str3 % d,
            });
          }
        } else {
          setResult({
            ratusRibu: Math.floor(str / a),
            limaPuluh: Math.floor(str1 / b),
            duaPuluhRibu: Math.floor(str2 / c),
            sisa: str2 % c,
          });
        }
      } else {
        setResult({
          ratusRibu: Math.floor(str / a),
          limaPuluh: Math.floor(str1 / b),
          sisa: str1 % b,
        });
      }
    } else {
      setResult({ ratusRibu: Math.floor(str / a), sisa: str % a });
    }
  }

  return (
    <div className="container mt-2">
      <div className="container">
        <div className="text-center">
          <h1 className="font-weight-bold">Denomination Numbers</h1>
        </div>
      </div>
      <div className="container mt-5">
        <form>
          <div className="form-group">
            <label htmlFor="wordInput">
              Input <b>Number</b> here
            </label>
            <input
              type="text"
              className="form-control"
              id="wordInput"
              placeholder="Ex : 50000"
              onChange={(e) => onChanges(e)}
              required
            />
          </div>
          <button
            type="button"
            onClick={() => onSubmits()}
            className="btn btn-primary mb-2"
          >
            Submit
          </button>
        </form>
        <div>
            {amount.min ? (<h5>You have to enter amount above Rp.99,-</h5>) : null}
            {amount.max ? (<h5>Sorry, maximum input is 1 billion</h5>) : null}
          {num.visible ? (
            <div>
              <h5>You have entered this amount Rp{rp},00</h5>
              <h5>Denomination result :</h5>
            </div>
          ) : null}
          {filters ? <h5>Sorry, we are only accepting number inputs</h5> : null}
        </div>
        <div className="container">
          {result.ratusRibu !== null && result.ratusRibu > 0 ? (
            <h3>Rp.100.000,- = {result.ratusRibu}</h3>
          ) : null}
          {result.limaPuluh !== null && result.limaPuluh > 0 ? (
            <h3>Rp.50.000,- = {result.limaPuluh}</h3>
          ) : null}
          {result.duaPuluhRibu !== null && result.duaPuluhRibu > 0 ? (
            <h3>Rp.20.000,- = {result.duaPuluhRibu}</h3>
          ) : null}
          {result.sepuluhRibu !== null && result.sepuluhRibu > 0 ? (
            <h3>Rp.10.000,- = {result.sepuluhRibu}</h3>
          ) : null}
          {result.limaRibu !== null && result.limaRibu > 0 ? (
            <h3>Rp.5000,- = {result.limaRibu}</h3>
          ) : null}
          {result.duaRibu !== null && result.duaRibu > 0 ? (
            <h3>Rp.2000,- = {result.duaRibu}</h3>
          ) : null}
          {result.seribu !== null && result.seribu > 0 ? (
            <h3>Rp.1000,- = {result.seribu}</h3>
          ) : null}
          {result.limaRatus !== null && result.limaRatus > 0 ? (
            <h3>Rp.500,- = {result.limaRatus}</h3>
          ) : null}
          {result.duaRatus !== null && result.duaRatus > 0 ? (
            <h3>Rp.200,- = {result.duaRatus}</h3>
          ) : null}
          {result.seratus !== null && result.seratus > 0 ? (
            <h3>Rp.100,- = {result.seratus}</h3>
          ) : null}
          {result.sisa !== null && result.sisa > 0 ? (
            <h3>Sisa = Rp.{result.sisa},-</h3>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Denomination;
