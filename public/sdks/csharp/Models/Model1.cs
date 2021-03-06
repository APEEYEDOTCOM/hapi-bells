// Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.

namespace silica.Models
{
    using Microsoft.Rest;
    using Newtonsoft.Json;
    using System.Linq;

    public partial class Model1
    {
        /// <summary>
        /// Initializes a new instance of the Model1 class.
        /// </summary>
        public Model1()
        {
          CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the Model1 class.
        /// </summary>
        /// <param name="email">User email account.</param>
        /// <param name="password">User password</param>
        public Model1(string email, string password)
        {
            Email = email;
            Password = password;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets or sets user email account.
        /// </summary>
        [JsonProperty(PropertyName = "email")]
        public string Email { get; set; }

        /// <summary>
        /// Gets or sets user password
        /// </summary>
        [JsonProperty(PropertyName = "password")]
        public string Password { get; set; }

        /// <summary>
        /// Validate the object.
        /// </summary>
        /// <exception cref="ValidationException">
        /// Thrown if validation fails
        /// </exception>
        public virtual void Validate()
        {
            if (Email == null)
            {
                throw new ValidationException(ValidationRules.CannotBeNull, "Email");
            }
            if (Password == null)
            {
                throw new ValidationException(ValidationRules.CannotBeNull, "Password");
            }
            if (Email != null)
            {
                if (Email.Length > 50)
                {
                    throw new ValidationException(ValidationRules.MaxLength, "Email", 50);
                }
            }
            if (Password != null)
            {
                if (Password.Length > 200)
                {
                    throw new ValidationException(ValidationRules.MaxLength, "Password", 200);
                }
            }
        }
    }
}
