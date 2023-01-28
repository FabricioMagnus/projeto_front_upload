<script>
  // @ts-nocheck

  import Login from "../services/loginApi";
  import { navigateTo } from "svelte-router-spa";

  let email = "";
  let password = "";

  $: formIsValid = email != "" && password != "";

  async function handleSubmit() {
    // window.localStorage.setItem("token", "UHGAUGSIUYGSOUGSPOUGHS");
    const obj = {
      username: email,
      password: password,
    };
    try {
      const response = await Login.login(obj);
      window.localStorage.setItem("token", response.token);
    } catch (error) {
      alert("E-mail ou senhas inválidos!");
      error = true;
      console.log("error: ", error);
    }
    navigateTo("/upload");
  }

  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
</script>

<div class="container">
  <form on:submit|preventDefault={handleSubmit}>
    <img
      src="http://creditoreal.softkuka.com.br/logo.png"
      alt="logo credito real"
    />
    <label>
      Usuário:
      <input type="text" bind:value={email} />
    </label>
    <label>
      Senha:
      <input type="password" id="myInput" bind:value={password} />
    </label>
    <div class="checkbox-input">
      <input type="checkbox" class={"checkbox"} on:click={myFunction} />
      <p>Mostrar Senha</p>
    </div>
    <button disabled={!formIsValid} type="submit">Acessar</button>
  </form>
</div>

<style>
  img {
    width: 16vw;
  }
  .checkbox {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  .checkbox-input {
    /* background-color: red; */
    width: fit-content;
    height: 40px;
    align-items: center;
    margin-top: -35px;
    margin-bottom: -25px;
    display: flex;
    flex-direction: row;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff50;
    border: 4px solid #ffffff50;
    padding: 20px;
    border-radius: 10px;
    width: 30vw;
    height: 55vh;
    filter: blur();
    backdrop-filter: "auto";
  }
  label {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 8vh;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: red; */
    width: 100%;
    height: 100%;
  }
  button {
    width: 80%;
    height: 6vh;
  }
  input {
    width: 100%;
    height: 8vh;
    border-radius: 10px;
  }
</style>
