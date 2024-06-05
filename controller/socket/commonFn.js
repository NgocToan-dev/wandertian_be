import io from "./index.js";
export default {
  update_di_cache: (table) => {
    const param = {
      type: "di_cache",
      table: table,
    };
    setTimeout(() => {
      io.emit("update_di_cache", param);
    }, 0);
  },
};
