module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear() + 5
    }`;
  },
};

// Header & Footer Partials
// function headerFooterPartials (request, response, next) {
//   response.renderPage = function (template, options, callback) {
//       var partials = (options && options.partials) || {};

//       partials.footer = path.join("partials", "footer");
//       partials.header = path.join("partials", "header");
//       options.partials = partials;

//       // Disable caching for dynamic content
//       if (request.method === "GET") {
//           response.setHeader("Cache-Control", "no-cache");
//       }

//       return response.render(template, options, callback);
//   };
//   return next();
// }
// app.use(headerFooterPartials);