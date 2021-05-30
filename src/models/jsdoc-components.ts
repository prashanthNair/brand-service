
/**
 * @swagger
 *  components:
 *    schemas:
 *      Post_Brand_Subscriptions:
 *        type: object
 *        properties:
 *          subscriptionId:
 *            type: array
 *            items: 
 *              type: string
 *            description: array of subscriptionId of the selected subscription
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      Put_Brand_Subscriptions:
 *        type: object
 *        properties:
 *          subscriptionStatus:
 *            type: string
 *            description: ACTIVE or INACTIVE based on subscribing or unsubscribing
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      SuccessResponse:
 *        type: object
 *        properties:
 *          success:
 *            type: boolean
 *            description: Tells the state of the API is success/failure
 *            example: true
 *          status:
 *            type: integer
 *            description: Indicates the status of the API transaction
 *            example: 1
 *          message:
 *            type: string
 *            description: Message about the API transaction
 *            example: Transaction successfull
 *
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      FailureResponse:
 *        type: object
 *        properties:
 *          success:
 *            type: boolean
 *            description: Tells the state of the API is success/failure
 *            example: false
 *          status:
 *            type: integer
 *            description: Indicates the status of the API transaction
 *            example: 0
 *          message:
 *            type: string
 *            description: Message about the API transaction
 *            example : Transaction Failure
 */
/**
 * @swagger
 *  components:
 *    responses:
 *      Success:
 *        description: The specified operation is completed successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SuccessResponse'
 *      FailureError:
 *        description: The specified operation failed due to internal server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/FailureResponse'
 *      BadRequest:
 *        description: Parameters are not appropriate for this API transaction. Please validate the input.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/FailureResponse'
 *
 */