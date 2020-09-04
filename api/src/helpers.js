export const helpers = {
  getCollection: async function (coleccion) {
    try {
      return await coleccion.find({});
    } catch (error) {}
  },

  getCollectionId: async function (coleccion, id) {
    try {
      return await coleccion.find({ _id: id });
    } catch (error) {}
  },

  postCollection: async function (coleccion, data) {
    try {
      return await coleccion.create(data);
    } catch (error) {}
  },

  putCollection: async function (idUpdate, data, coleccion) {
    try {
      let meme = { _id: idUpdate };

      return await coleccion.update(meme, data);
    } catch (error) {}
  },

  getCollectionByName: async function (coleccion, name) {
    try {
      return await coleccion.find({ category: name });
    } catch (error) {}
  },
};
