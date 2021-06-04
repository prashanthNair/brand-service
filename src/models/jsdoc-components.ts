/**
 * @swagger
 *  components:
 *    schemas:
 *      Brand:
 *        type: object
 *        properties:
 *          BrandId:
 *            type: string
 *            description: User name for the user, needs to be unique
 *          DomainId:
 *            type: string
 *            description: First name of the user
 *          CategoryId:
 *            type: string
 *            description: Last name of the user
 *          Category:
 *            type: string
 *            description: Password for the user account
 *          BrandName:
 *            type: string
 *            description: Current location of the user
 *          About:
 *            type: string
 *            description: Current Picture
 *          Country:
 *            type: string
 *            description: Residing state of the user
 *          EmailId:
 *            type: string
 *            description: Residing country of the user
 *          PhoneNumber:
 *            type: integer
 *            description: Email ID of the user
 *            format: email
 *          CountryCode:
 *            type: string
 *            description: Mobile number of the user
 *          Street:
 *            type: string
 *            description: Mobile number of the user
 *          City:
 *            type: string
 *            description: Mobile number of the user
 *          State:
 *            type: string
 *            description: Mobile number of the user
 *          PostalCode:
 *            type: string
 *            description: Mobile number of the user
 *          UserName:
 *            type: string
 *            description: Mobile number of the user
 *          Designation:
 *            type: string
 *            description: Mobile number of the user
 *          UserEmailId:
 *            type: string
 *            description: Mobile number of the user
 *          RegBusinessName:
 *            type: string
 *            description: Mobile number of the user
 *          RegisteredType:
 *            type: string
 *            description: Mobile number of the user
 *          AccountPassword:
 *            type: string
 *            description: Mobile number of the user
 *
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Initial_registration:
 *        type: object
 *        properties:
 *          mobileNum:
 *            type: number
 *            description: Mobile Number for the user.
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      User_email:
 *        type: object
 *        properties:
 *          id:
 *            type: int
 *            description: ID of the user.
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      BuddyUser:
 *        type: object
 *        properties:
 *          userName:
 *            type: string
 *            description: User name for the buddy user, needs to be unique
 *          firstName:
 *            type: string
 *            description: First name of the buddy user
 *          lastName:
 *            type: string
 *            description: Last name of the buddy user
 *          password:
 *            type: string
 *            description: Password for the buddy user account
 *          location:
 *            type: string
 *            description: Current location of the buddy user
 *          state:
 *            type: string
 *            description: Residing state of the buddy user
 *          country:
 *            type: string
 *            description: Residing country of the buddy user
 *          email:
 *            type: string
 *            description: Email ID of the buddy user
 *            format: email
 *          mobileNum:
 *            type: integer
 *            description: Mobile number of the buddy user
 *          roleId:
 *            type: integer
 *            description: Role Id of the buddy user
 *          roleName:
 *            type: string
 *            description: Role Name of the buddy user
 *          status:
 *            type: string
 *            description: Status of the buddy user
 *          homeTown:
 *            type: string
 *            description: Hometown of the buddy user
 *          teamId:
 *            type: integer
 *            description: Team Id of the buddy user
 *          isActive:
 *            type: string
 *            description: Account activation of the buddy user
 *          parentId:
 *            type: integer
 *            description: Parent Id of the buddy user
 *          createdDate:
 *            type: integer
 *            description: Date of the buddy user creation
 *            format: date
 *          buddyRole:
 *            type: string
 *            description: Role of the buddy user
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Buddy:
 *        type: object
 *        properties:
 *          homeTown:
 *            type: string
 *            description: Home Town of the user
 *          teamId:
 *            type: string
 *            description: Team ID of the user
 *          userId:
 *            type: string
 *            description: User ID of the user
 *          isActive:
 *            type: string
 *            description: Active/Inactive State of the user account
 *          state:
 *            type: string
 *            description: Residing State of the user
 *          country:
 *            type: string
 *            description: Residing Country of the user
 *          mobileNum:
 *            type: string
 *            description: Mobile Number of the user
 *          parentId:
 *            type: string
 *            description: Parent ID of the user
 *          createdDate:
 *            type: string
 *            description: Date of Creation.
 *            format: date
 *          buddyRole:
 *            type: string
 *            description: Role of the user
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      BuddyLink:
 *        type: object
 *        properties:
 *          mobileNum:
 *            type: string
 *            description: Mobile Number of the user
 *          parentId:
 *            type: string
 *            description: Parent ID of the user
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      Buddy_Inventory:
 *        type: object
 *        properties:
 *          productId:
 *            type: string
 *            description: ID of the Product
 *          type:
 *            type: string
 *            description: Type of the Product
 *          productCategory:
 *            type: string
 *            description: Category of the Product
 *          createdDate:
 *            type: string
 *            description: Date of Product Registration
 *            format: date 
 *          isAvailable:
 *            type: string
 *            description: Product is available or not.
 *          buddyMargin:
 *            type: string
 *            description: Margin available to buddy
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      Product:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *            description: Name of the Product
 *          category:
 *            type: string
 *            description: Category of the Product
 *          type:
 *            type: string
 *            description: Type of the Product
 *          brand:
 *            type: string
 *            description: Brand of the product 
 *          currency:
 *            type: string
 *            description: Currency Format
 *          description:
 *            type: string
 *            description: Description of the product
 *          sellingPrice:
 *            type: string
 *            description: Selling price of the product
 *          gst:
 *            type: string
 *            description: GST of the product
 *          mrp:
 *            type: string
 *            description: Maximum Retail Price of the product
 *          createdDate:
 *            type: string
 *            description: Date of product registartion
 *            format: date
 *          actualPrice:
 *            type: string
 *            description: Actual Price of the product
 *          businessId:
 *            type: string
 *            description: Business Id of the customer adding product
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      Role:
 *        type: object
 *        properties:
 *          roleId:
 *            type: string
 *            description: Role ID of the User
 *          userId:
 *            type: string
 *            description: User ID of the User
 *          roleName:
 *            type: string
 *            description: Type of the role assigned
 *          status:
 *            type: string
 *            description: Status of the Role
 */

 
/**
 * @swagger
 *  component:
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
 *      InitialUser:
 *        type: object
 *        properties:
 *          firstName:
 *            type: string
 *            description: First Name of the User
 *          lastName:
 *            type: string
 *            description: Last Name of the User
 *          password:
 *            type: string
 *            description: Password of the user account
 *          email:
 *            type: string
 *            description: Email of the User
 *          gender:
 *            type: string
 *            description: Gender 
 *          dob:
 *            type: string
 *            format: date-time
 *            description: date of birth 
 *          parentId:
 *            type: number
 *            description: Id of the parent user
 *          buddyRole:
 *            type: string
 *            description: Role of the buddy
 */
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
 *              description: subscriptionId of the selected subscription
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
 *
 */