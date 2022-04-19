import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import ButtonFinalizar from '../buttons/buttonFinalizar';
import { useHistory } from 'react-router-dom';
import ButtonLimpar from '../buttons/buttonLimpar';

const campoSelect = [{ sexo: 'Masculino' }, { sexo: 'Feminino' }];
const validacaoEmail = /^(([^<>()[\]\\.,;:\s@“]+(\.[^<>()[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const useStyles = makeStyles(() => ({
  nomeCliente: {
    bottom: 35,
  },
  emailCliente: {
    bottom: 35,
  },
  sexoCliente: {
    color: '#9e9e9e',
  },
  formControl: {
    marginTop: -19,
  },
  campoObg: {
    fontSize: 12,
    color: '#f44336',
    marginTop: -38,
    marginBottom: 10,
  },
  campoObgSelect: {
    fontSize: 12,
    lineHeight: 18,
    color: '#f44336',
    fontWeight: 400,
    height: 10,
    marginTop: -95,
    marginBottom: 50,
  },
  colButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
}));

const Form = ({ disabled, onClick }) => {
  const classes = useStyles();
  const [currency, setCurrency] = useState(0);
  const { register, handleSubmit, errors, control } = useForm({});
  const history = useHistory();

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const telaFinalizar = (value) => {
    const { nomeCliente } = value;
    localStorage.setItem('nomeCliente', nomeCliente);
    history.push('/finalizacao');
  };

  return (
    <form onSubmit={handleSubmit(telaFinalizar)}>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-5">
          <FormControl fullWidth>
            <TextField
              inputRef={register({
                required: true,
                pattern: /[A-Za-z]/,
              })}
              error={
                errors.nomeCliente?.type === 'required' || errors.nomeCliente?.type === 'pattern'
              }
              className={classes.nomeCliente}
              name="nomeCliente"
              label="Nome *"
              type="text"
              variant="outlined"
              placeholder="Nome do cliente aqui"
              margin="normal"
              inputProps={{
                maxLength: 50,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {errors.nomeCliente?.type === 'required' && (
              <span>
                <p className={classes.campoObg}>Campo obrigatório</p>
              </span>
            )}
            {errors.nomeCliente?.type === 'pattern' && (
              <span>
                <p className={classes.campoObg}>Campo inválido</p>
              </span>
            )}
          </FormControl>
        </div>
        <div className="col-12 col-md-6 col-lg-5">
          <FormControl fullWidth>
            <TextField
              inputRef={register({
                required: true,
                pattern: validacaoEmail,
              })}
              error={
                errors.emailCliente?.type === 'required' || errors.emailCliente?.type === 'pattern'
              }
              className={classes.emailCliente}
              name="emailCliente"
              label="E-mail *"
              variant="outlined"
              placeholder="Digite seu email aqui"
              margin="normal"
              inputProps={{
                maxLength: 100,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {errors.emailCliente?.type === 'required' && (
              <span>
                <p className={classes.campoObg}>Campo obrigatório</p>
              </span>
            )}
            {errors.emailCliente?.type === 'pattern' && (
              <span>
                <p className={classes.campoObg}>E-mail inválido</p>
              </span>
            )}
          </FormControl>
        </div>
        <div className="col-12 col-md-3 col-lg-2">
          <Controller
            control={control}
            defaultValue=""
            as={
              <FormControl
                variant="outlined"
                className={classes.formControl}
                error={errors.sexoCliente}
                fullWidth
              >
                <InputLabel shrink id="sexoCliente">
                  Sexo *
                </InputLabel>
                <Select
                  labelId="sexoCliente"
                  id="sexoCliente"
                  label="Sexo *"
                  className={classes.sexoCliente}
                  native
                  value={currency}
                  onChange={handleChange}
                  inputProps={{ name: 'Sexo', id: 'sexoCliente' }}
                >
                  <option value="0">Selecione</option>
                  {campoSelect.map((opcoes, index) => (
                    <option value={index + 1}>{opcoes.sexo}</option>
                  ))}
                </Select>
              </FormControl>
            }
            rules={{ required: true }}
            name="sexoCliente"
          />
          {errors.sexoCliente && (
            <span>
              <p className={classes.campoObgSelect}>Campo obrigatório</p>
            </span>
          )}
        </div>
      </div>
      <div className="row">
        <div className={`col-12 ${classes.colButton}`}>
          <ButtonFinalizar disabled={disabled} />
        </div>
      </div>
      <div className="row">
        <div className={`col-12 ${classes.colButton}`}>
          <ButtonLimpar disabled={disabled} onClick={onClick} />
        </div>
      </div>
    </form>
  );
};

export default Form;
