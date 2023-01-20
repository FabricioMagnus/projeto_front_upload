<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import Upload from "../services/upload_File";
  import { slide } from "svelte/transition";
  import { navigateTo } from "svelte-router-spa";

  let file;
  let text = "Arraste e solte o arquivo aqui";
  let isValid = true;

  onMount(async () => {
    const input = document.querySelector("input[type='file']");
    input.addEventListener("change", async (event) => {
      const file = event.target.files[0];
      if (
        file.type !==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        text = "Por favor, selecione um arquivo xlsx válido";
        isValid = true;
        return;
      }
      isValid = false;
      text = file.name;
    });
  });

  async function uploadFile() {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await Upload.uploadFile(formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function logout() {
    navigateTo("/login");
  }
</script>

<div style="position: absolute; top: 0; right: 0;">
  <button style="margin-top: 50px; margin-right: 60px;" on:click={logout}
    >Logout</button
  >
</div>

<div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    id="drop-area"
    in:slide={{ duration: 2000 }}
    on:dragover={(event) => event.preventDefault()}
    on:drop={(event) => {
      event.preventDefault();
      const file = event.dataTransfer.items[0].getAsFile();
      if (
        file.type !==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        text = "Por favor, selecione um arquivo xlsx válido";
        return;
      }
      text = file.name;
    }}
    on:click={() => document.querySelector("input[type='file']").click()}
  >
    <p>{text}</p>
  </div>
  <input
    type="file"
    style="display:none"
    bind:value={file}
    on:change={uploadFile}
  />
  <button disabled={isValid} style="margin-top: 30px;" on:click={uploadFile}
    >Enviar</button
  >
</div>

<style>
  #drop-area {
    border: 2px dashed gray;
    padding: 1rem;
    text-align: center;
    border-radius: 15px;
    align-items: center;
    width: 40vw;
    height: 20vh;
  }
  button {
    margin-top: "120px";
  }
</style>
