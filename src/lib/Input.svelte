<script>
  import { onMount } from "svelte";
  import axios from "axios";

  let file;
  let fileName;

  const handleDrop = (event) => {
    event.preventDefault();
    file = event.dataTransfer.files[0];
    fileName = file.name;
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      await axios.post("/api/upload", formData);
      alert("Upload realizado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao realizar upload");
    }
  };

  onMount(() => {
    const dropArea = document.getElementById("drop-area");
    dropArea.addEventListener("dragenter", (event) => event.preventDefault());
    dropArea.addEventListener("dragover", (event) => event.preventDefault());
    dropArea.addEventListener("drop", handleDrop);
  });
</script>

<div id="drop-area" on:dragover={handleDrop}>
  {#if fileName}
    <p>Arquivo selecionado: {fileName}</p>
    <button on:click={handleUpload}>Enviar</button>
  {:else}
    <p>Arraste e solte um arquivo aqui para selecioná-lo</p>
  {/if}
</div>

<style>
  #drop-area {
    border: 2px dashed gray;
    padding: 1rem;
    text-align: center;
  }
</style>
