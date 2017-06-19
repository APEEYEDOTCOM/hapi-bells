/*
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the Model1 class.
 * @constructor
 * @member {string} email User email account.
 *
 * @member {string} password User password
 *
 */
class Model1 {
  constructor() {
  }

  /**
   * Defines the metadata of Model1
   *
   * @returns {object} metadata of Model1
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Model 1',
      type: {
        name: 'Composite',
        className: 'Model1',
        modelProperties: {
          email: {
            required: true,
            serializedName: 'email',
            constraints: {
              MaxLength: 50
            },
            type: {
              name: 'String'
            }
          },
          password: {
            required: true,
            serializedName: 'password',
            constraints: {
              MaxLength: 200
            },
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Model1;
