<script>
  import Login from "../services/loginApi";
  import { navigateTo } from "svelte-router-spa";

  let email = "";
  let password = "";

  $: formIsValid = email != "" && password != "";

  async function handleSubmit() {
    // const obj = {
    //   email: email,
    //   pwd: password,
    // };
    // try {
    //   const response = await Login.login(obj);
    //   window.localStorage.setItem("token", response.token);
    // } catch (error) {
    //   alert("E-mail ou senhas inválidos!");
    //   error = true;
    //   console.log("error: ", error);
    // }
    navigateTo("/upload");
  }
</script>

<div class="container">
  <form on:submit|preventDefault={handleSubmit}>
    <label>
      Email:
      <input type="email" bind:value={email} />
    </label>
    <label>
      Senha:
      <input type="password" bind:value={password} />
    </label>
    <button disabled={!formIsValid} type="submit">Login</button>
  </form>
</div>

<style>
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
    height: 45vh;
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
