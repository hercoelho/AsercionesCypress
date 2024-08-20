// Aserciones de existencia y visibilidad
cy.get('#elemento').should('exist');
cy.get('#elemento').should('be.visible');
cy.get('#elemento').should('not.exist');

// Aserciones de estado
cy.get('#checkbox').should('be.checked');
cy.get('#input').should('be.disabled');
cy.get('#elemento').should('have.class', 'active');

// Aserciones de contenido
cy.get('#elemento').should('have.text', 'Texto exacto');
cy.get('#elemento').should('contain', 'Texto parcial');
cy.get('#input').should('have.value', 'Valor del input');

// Aserciones de atributos
cy.get('a').should('have.attr', 'href', 'https://ejemplo.com');

// Aserciones de longitud (para colecciones)
cy.get('li').should('have.length', 5);

// Aserciones numéricas
cy.get('#contador').should('have.text', '5')
  .invoke('text').then(parseFloat)
  .should('be.greaterThan', 0)
  .and('be.lessThan', 10);

// Aserciones de CSS
cy.get('#elemento').should('have.css', 'color', 'rgb(255, 0, 0)');

// Combinación de aserciones
cy.get('#elemento')
  .should('be.visible')
  .and('contain', 'Texto')
  .and('have.class', 'activo');