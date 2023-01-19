<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  // import axios from "axios";

  let file;
  let text = "Arraste e solte o arquivo aqui";

  onMount(async () => {
    const input = document.querySelector("input[type='file']");
    input.addEventListener("change", async (event) => {
      file = event.target.files[0];
      text = file.name;
    });
  });

  async function uploadFile() {
    const formData = new FormData();
    formData.append("file", file);
    try {
      // const response = await axios.post("/api/upload", formData);
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
</script>

<div>
  <div
    id="drop-area"
    on:dragover={(event) => event.preventDefault()}
    on:drop={(event) => {
      event.preventDefault();
      const input = event.dataTransfer.items[0].getAsFile();
      file = input;
      text = input.name;
    }}
  >
    <p>{text}</p>
  </div>
  <input
    type="file"
    style="display:none"
    bind:value={file}
    on:change={uploadFile}
  />
  <button style="margin-top: 30px;" on:click={uploadFile}>Enviar</button>
</div>

<style>
  #drop-area {
    border: 2px dashed gray;
    padding: 1rem;
    text-align: center;
  }
  button {
    margin-top: "120px";
  }
</style>
