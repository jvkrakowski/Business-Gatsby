// const path = require(`path`)
// exports.createPages = async ({ graphql, actions, reporter }) => {
//     const { createPage } = actions;
//     const tagTemplate = path.resolve('src/templates/tagTemplate.js');

//     const result = await graphql(`
//     query Tags {
//       allMdx {
//         group(field: frontmatter___tags) {
//           fieldValue
//           totalCount
//         }
//       }
//     }
    
//     `)

//     if (result.errors) {
//       console.log(result.errors);
//       reporter.panicOnBuild(`Error whil running GraphQL query`);
//     }


//     const tags = result.data.allMdx.group
//     tags.forEach(tags => {
//       createPage({
//         path: `/tags/${tags.fieldValue}/`,
//         component: tagTemplate,
//         context: {
//           tags: tags.fieldValue
//         }
//       })
//     });

// };

