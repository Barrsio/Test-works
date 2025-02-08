describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://tarkov.help/ru");
    cy.get(".cookie-consent-button").first().click({ force: true });
  });
  it("Проверка отметки предметов для выполнения заданий", () => {
    cy.get('[class="quests links_elem  "]').click({ force: true });
    cy.get('[id="quests"] a').eq(1).click({ force: true });
    cy.wait(2000);
    cy.get(".article__image").first().click({ force: true });
    cy.wait(2000);
    cy.get(".quests-desktop")
      .find(".found-counter__content button")
      .first()
      .click({ force: true })
      .click({ force: true });
    cy.get(".quests-desktop")
      .get(".found-counter__text span")
      .first()
      .should("have.text", "2");
    cy.get(".quests-desktop")
      .find(".found-counter__content button")
      .last()
      .click({ force: true })
      .click({ force: true });
  cy.get(".quests-desktop")
    .get(".found-counter__text span")
    .first()
    .should("have.text", "0");
  });

  it("Проверка доступности товаров на барахолке", () => {
    cy.get('[data-id=economics]').click({ force: true });
    cy.get('[id=economics] a').eq(2).click({ force: true });
    cy.wait(2000);
    cy.get('[class=flea-categories]').find('div').eq(0).find('div').eq(2).find('[class=flea-categories-child]').eq(1).find('[class=flea-category-name]').click({ force: true })
    cy.get('[id=fleaContent]').find('[class=flea-item]').eq(0).find('[class=flea-mobile]').should('have.length', 4)
    cy.get('[class=flea-filter-buttons]').find('button').eq(1).click({ force: true })
    cy.get('[id=fleaBannedContent]').find('[class=flea-item]').eq(0).find('[class=flea-mobile]').should('have.length', 2)
  });

  it("Проверка верности порядка патрон в тирлисте", () => {
    cy.get('[class=columns_prod]').find('a').eq(0).click({ force: true })
    cy.wait(20000);
    cy.get('[class=ammo-filters]').find('[class="ammo-filters-row mobileNone"]').eq(1).find('button').eq(2).click({force:true})
    cy.wait(20000);
    cy.get('[class=ammo-row-table]').find('[class=ammo-row__penetration]')
           .then(prices => {
               const highTear = parseFloat(prices.first().text());
               const lowTear  = parseFloat(prices.last().text());
               expect(lowTear).to.be.lessThan(highTear);
           });
  })

  it("Проверка бартеров у Егеря", () => {
    cy.get('[class="economics links_elem  "]').click({ force: true });
    cy.get('[class="economics_info selected_links-info"]')
      .find("a")
      .eq(0)
      .click({ force: true });
    cy.wait(10000);
    cy.get('[class="barter-cards-wrap | js-traders false"]')
      .find('[class=" close"]')
      .eq(0)
      .click({ force: true })
      .wait(2000)
      .get('[class="barter-cards-wrap | js-traders false"]')
      .find('[class=" close"]')
      .eq(1)
      .click({ force: true })
      .wait(2000)
      .get('[class="barter-cards-wrap | js-traders false"]')
      .find('[class=" close"]')
      .eq(2)
      .click({ force: true })
      .wait(2000)
      .get('[class="barter-cards-wrap | js-traders false"]')
      .find('[class=" close"]')
      .eq(3)
      .click({ force: true })
      .wait(2000)
      .get('[class="barter-cards-wrap | js-traders false"]')
      .find('[class=" close"]')
      .eq(4)
      .click({ force: true })
      .wait(2000)
      .get('[class="barter-cards-wrap | js-traders false"]')
      .find('[class=" close"]')
      .eq(5)
      .click({ force: true });
      let found = false;
      let a = 0;
      let targetValue4 = 4;
      
      cy.get('[class="js-table-body"]')
        .find('[class="filtration-by-level"]')
        .then(prices => {
          const totalPrices = prices.length;
      
          let found = false;
          for (let a = 0; a < totalPrices; a++) {
            cy.wrap(prices.eq(a))
              .invoke('text')
              .then(text => {
                
                const cleanText = text.replace(/\s|&nbsp;/g, '').trim();
                const highTear = parseFloat(cleanText);
      
                if (highTear === targetValue4) {
                  
                  expect(cleanText).to.equal('4');
                  found = true;
                }
              });
      
            if (found) break;
          }
        });
      
      cy.get('[class="barter-cards-wrap | js-traders false"]')
        .find('[class="selector-trader"]')
        .eq(6)
        .find('[class=" lvl"]')
        .eq(2)
        .click({ force: true })
        .wait(2000);
      
      found = false;
      a = 0;
      let targetValue3 = 3;
      cy.get('[class="js-table-body"]')
        .find('[class="filtration-by-level"]')
        .then(prices => {
          const totalPrices = prices.length;
      
          let found = false;
          for (let a = 0; a < totalPrices; a++) {
            cy.wrap(prices.eq(a))
              .invoke('text')
              .then(text => {
               
                const cleanText = text.replace(/\s|&nbsp;/g, '').trim();
                const highTear = parseFloat(cleanText);
      
                if (highTear === targetValue3) {
                  
                  expect(cleanText).to.equal('3');
                  found = true;
                }
              });
      
            if (found) break;
          }
        });
        cy.get('[class="barter-cards-wrap | js-traders false"]')
        .find('[class="selector-trader"]')
        .eq(6)
        .find('[class=" lvl"]')
        .eq(1)
        .click({ force: true })
        .wait(2000);
      
      found = false;
      a = 0;
      let targetValue2 = 2;
      cy.get('[class="js-table-body"]')
        .find('[class="filtration-by-level"]')
        .then(prices => {
          const totalPrices = prices.length;
      
          let found = false;
          for (let a = 0; a < totalPrices; a++) {
            cy.wrap(prices.eq(a))
              .invoke('text')
              .then(text => {
                
                const cleanText = text.replace(/\s|&nbsp;/g, '').trim();
                const highTear = parseFloat(cleanText);
      
                if (highTear === targetValue2) {
                  
                  expect(cleanText).to.equal('2');
                  found = true;
                }
              });
      
            if (found) break; 
          }
        });
        cy.get('[class="barter-cards-wrap | js-traders false"]')
        .find('[class="selector-trader"]')
        .eq(6)
        .find('[class=" lvl"]')
        .eq(0)
        .click({ force: true })
        .wait(2000);
      
      found = false;
      a = 0;
      let targetValue1 = 1;
      cy.get('[class="js-table-body"]')
        .find('[class="filtration-by-level"]')
        .then(prices => {
          const totalPrices = prices.length;
      
          let found = false;
          for (let a = 0; a < totalPrices; a++) {
            cy.wrap(prices.eq(a))
              .invoke('text')
              .then(text => {
               
                const cleanText = text.replace(/\s|&nbsp;/g, '').trim();
                const highTear = parseFloat(cleanText);
      
                if (highTear === targetValue1) {
                 
                  expect(cleanText).to.equal('1');
                  found = true;
                }
              });
      
            if (found) break;
          }
        });
  });
  it("Проверка что предметы создаються на определённом уровне верстака", () => {
    cy.get('[class="economics links_elem  "]').click({ force: true });
    cy.get('[class="economics_info selected_links-info"]')
      .find("a")
      .eq(4)
      .click({ force: true });
    cy.wait(10000);
    cy.get('[class="hideout-map__frame"]').eq(0).click({ force: true });
    cy.get('[class="hideout-module-crafts__link"]').eq(2).click({ force: true});
    cy.get('[class="crafts-item filtration-item"]').eq(0).find('[class="hideout-area__level"]').should('have.text', '3 уровень')
    cy.get('[data-lvl="2"]').click({ force: true});
    cy.get('[class="crafts-item filtration-item"]').eq(0).find('[class="hideout-area__level"]').should('have.text', '2 уровень')
    cy.get('[data-lvl="1"]').click({ force: true});
    cy.get('[class="crafts-item filtration-item"]').eq(0).find('[class="hideout-area__level"]').should('have.text', '1 уровень')
    });

  it("Проверка работоспособности поиска на странице важных предметов", () => {
    cy.get('[class="columns_prod"]').find('a').eq(3).click({ force: true });
    const abc = 'кабель';
    cy.get('[class="quest-items__header"]').find('[class="autoCompleteHeader"]').type(`${abc}`);
    cy.wait(5000);
    cy.get('[class="quest-items__items-list"]')
      .find('[class="quest-items__items-list__item"]')
      .eq(0)
      .find('[class="item-wrapper item-name-wrapper item_module"]')
      .find('[class="item-name-count-wrapper"]')
      .find('span')
      .should('contain', abc);
  });
});
