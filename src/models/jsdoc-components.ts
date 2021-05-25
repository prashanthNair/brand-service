/**
 * @swagger
 *  components:
 *    schemas:
 *      Post_Product:
 *        type: object
 *        properties:
 *          categoryId:
 *            type: string
 *            description: category ID
 *          productCategoryId:
 *            type: string
 *            description: product category ID
 *          brandId:
 *            type: string
 *            description: brand ID
 *          productName:
 *            type: string
 *            description: product name
 *          title:
 *            type: string
 *            description: title
 *          keyPoints:
 *            type: string
 *            description: key points
 *          mrp:
 *            type: number
 *            description: mrp
 *          sellingPrice:
 *            type: number
 *            description: selling price
 *          loyaltyPercentage:
 *            type: number
 *            description: loyalty percentage
 *          buddyMargin:
 *            type: number
 *            description: bbuddy margin
 *          tag:
 *            type: string
 *            description: tag name
 *          isVeg:
 *            type: boolean
 *            description: is vegitarian
 *          ageGroup:
 *            type: number
 *            description: age group
 *          weight:
 *            type: string
 *            description: weight
 *          manufacturedDate:
 *            type: string
 *            description: manufactured date
 *          expiryDate:
 *            type: string
 *            description: expiry date
 *          productBrand:
 *            type: string
 *            description: product brand
 *          currency:
 *            type: string
 *            description: currency
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      Get_products:
 *        type: object
 *        properties:
 *          subCategoryId:
 *            type: staring
 *            description: subCategoryId of products
 *          status: 
 *             type: string
 *             description: Current status of products "Active"/"Inactive"
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