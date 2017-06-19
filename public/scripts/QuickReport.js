function getParameterByName(name, url) {
	if (!url) {
		url = window.location.href;
	}
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	results = regex.exec(url);
	if (!results)
		return null;
	if (!results[2])
		return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var stageID = getParameterByName('StageID');
console.log(stageID)
var response;
 
var responseDefault = {
  "RiskMatrixResult": "PASS",
  "RiskMatrixScore": 172,
  "RiskThreshold": 170,
  "RiskScoreFailReasons": [
    "Email has been compromised before",
    "Match found on Dow Jones",
    "Town or Complex not found on Proof of Address Document",
    "Address country not found on Proof of Address Document",
    "Postal Code not found on Proof of Address Document"
  ],
  "RiskScorePassReasons": [
    "ID Number matches Home Affairs",
    "First Name matches Home Affairs",
    "Last name matches Home Affairs",
    "Date of Birth matches Home Affairs",
    "Citizenship matches Home Affairs",
    "Gender matches Home Affairs",
    "Vital Status is ALIVE",
    "Moble number matches known owner",
    "Telephone number matches known owner",
    "Face found on ID Document",
    "Mood of face found is not Joyfull",
    "ID Image recognised as proof of Identity",
    "First name found on ID Document",
    "Last name found on ID Document",
    "ID Number found on ID Document",
    "Found street number on Proof of Address Document",
    "Found street name on Proof of Address Document",
    "Found locality or city on Proof of Address Document"
  ],
  "StagedData": {
    "results": [
      {
        "stageID": 771,
        "api_key": "c3BuMTM3bHU2RzloaWgzMjIxUmsxZ0JqT05ZOHdkeGE6MDhSdU",
        "identity_number": "8211085066081",
        "title": "Mr",
        "first_name": "Tyrone",
        "middle_name": " ",
        "last_name": "Smith",
        "date_of_birth": "1982-11-01",
        "StreetNoOrUnitNo": "490 A",
        "StreetName": " Mooibos Street",
        "TownOrSuburbOrComplex": "The Reeds Ext 70",
        "LocalityOrCity": "Centurion",
        "addressCountry": "South Africa",
        "addressPostalCode": "0157",
        "email_address": "tyronesmith@gmail.com",
        "mobileNo": "+27824414851",
        "telephoneNo": "+27824414851",
        "bank_account_number": "1128011832",
        "bank_branch_code": "112805",
        "bank_account_type": "cheque",
        "datestamp": "2016-09-13T07:07:35.000Z",
        "citizenship": "South African",
        "gender": "Male",
        "IDDocumentFileName": "TIDHighRes.jpg",
        "AddressDocumentFileName": "8211085066081_POA_eDtHT_WL1.jpg"
      }
    ]
  },
  "ProviderResponses": [
    {
      "Identity": {
        "status": "SUCCESS",
        "timestamp": "2016-10-30 08:40:02",
        "response": {
          "report_file": [],
          "data": {
            "comparison_data": null,
            "data_only": "true",
            "report_data": {
              "identity_data": [
                {
                  "issuing_country": "ZA",
                  "verification_status": "VS8",
                  "first_name": "TYRONE",
                  "documents": [
                    "https://api-livev2.thisisme.com//media/uploaded_files/52cf49fea5ff66588408852f65cf8272/2016-03/02/medium.b83052021a63d9c91117e83007c6f891.jpg"
                  ],
                  "surname": "SMITH",
                  "citizenship": "South African",
                  "identity_type": "ID",
                  "gender": "Male",
                  "age": 33,
                  "identity_number": "8211085066081",
                  "last_update": "2016-10-27 10:19:58 UTC",
                  "date_of_birth": "1982-11-01",
                  "tim_id": "TIM_0B655F13-DA22D1D4-BE36E6A4",
                  "country_code": null,
                  "vital_status": "ALIVE",
                  "firstnames": "TYRONE",
                  "initials": "T"
                }
              ],
              "banking_data": [],
              "address_data": [
                {
                  "verification_status": "VS8",
                  "added": "2016-03-02 16:13:31 UTC",
                  "street_number": "490",
                  "normalised_address": "490 Mooibos St, Centurion, 0158, South Africa",
                  "Geometry": {
                    "location": {
                      "lat": -25.893754,
                      "lng": 28.113704
                    },
                    "viewport": {
                      "northeast": {
                        "lat": -25.8924050197085,
                        "lng": 28.1150529802915
                      },
                      "southwest": {
                        "lat": -25.8951029802915,
                        "lng": 28.1123550197085
                      }
                    },
                    "location_type": "ROOFTOP"
                  },
                  "HasDocuments": false,
                  "last_update": "2016-03-02 16:13:31 UTC",
                  "is_default": true,
                  "RecordID": 11692,
                  "documents": [],
                  "address_components": [
                    {
                      "value": "480",
                      "label": "Street Number"
                    },
                    {
                      "value": "Barkbush Street",
                      "label": "Street Name"
                    },
                    {
                      "value": "Thatchfield",
                      "label": "Town"
                    },
                    {
                      "value": "Centurion",
                      "label": "Locality"
                    },
                    {
                      "value": "Pretoria",
                      "label": "City"
                    },
                    {
                      "value": "Gauteng",
                      "label": "Province"
                    },
                    {
                      "value": "South Africa",
                      "label": "Country"
                    },
                    {
                      "value": "0158",
                      "label": "Postal Code"
                    }
                  ],
                  "AddressAudit": null
                },
                {
                  "verification_status": "VS8",
                  "added": "2015-04-30",
                  "street_number": null,
                  "normalised_address": "Rooibos St, Centurion, 0158, South Africa",
                  "Geometry": {
                    "location_type": "GEOMETRIC_CENTER",
                    "bounds": {
                      "northeast": {
                        "lat": -25.894189,
                        "lng": 28.117294
                      },
                      "southwest": {
                        "lat": -25.89573,
                        "lng": 28.114244
                      }
                    },
                    "viewport": {
                      "northeast": {
                        "lat": -25.8936105197085,
                        "lng": 28.117294
                      },
                      "southwest": {
                        "lat": -25.8963084802915,
                        "lng": 28.114244
                      }
                    },
                    "location": {
                      "lat": -25.8949286,
                      "lng": 28.115597
                    }
                  },
                  "HasDocuments": false,
                  "last_update": "2016-08-31",
                  "is_default": false,
                  "RecordID": null,
                  "documents": null,
                  "address_components": [
                    {
                      "value": "Rooibos Street",
                      "label": "Street Name"
                    },
                    {
                      "value": "Thatchfield",
                      "label": "Town"
                    },
                    {
                      "value": "Centurion",
                      "label": "Locality"
                    },
                    {
                      "value": "Pretoria",
                      "label": "City"
                    },
                    {
                      "value": "Gauteng",
                      "label": "Province"
                    },
                    {
                      "value": "South Africa",
                      "label": "Country"
                    },
                    {
                      "value": "0158",
                      "label": "Postal Code"
                    }
                  ],
                  "AddressAudit": null
                },
                {
                  "verification_status": "VS8",
                  "added": "2013-12-31",
                  "street_number": "44",
                  "normalised_address": "44 Olga St, Emalahleni, 1035, South Africa",
                  "Geometry": {
                    "location": {
                      "lat": -25.9129,
                      "lng": 29.2259
                    },
                    "viewport": {
                      "northeast": {
                        "lat": -25.9115510197085,
                        "lng": 29.2272489802915
                      },
                      "southwest": {
                        "lat": -25.9142489802915,
                        "lng": 29.2245510197085
                      }
                    },
                    "location_type": "ROOFTOP"
                  },
                  "HasDocuments": false,
                  "last_update": "2016-08-31",
                  "is_default": false,
                  "RecordID": null,
                  "documents": null,
                  "address_components": [
                    {
                      "value": "33",
                      "label": "Street Number"
                    },
                    {
                      "value": "Olga Street",
                      "label": "Street Name"
                    },
                    {
                      "value": "Witbank",
                      "label": "Town"
                    },
                    {
                      "value": "Emalahleni",
                      "label": "Locality"
                    },
                    {
                      "value": "Nkangala",
                      "label": "City"
                    },
                    {
                      "value": "Mpumalanga",
                      "label": "Province"
                    },
                    {
                      "value": "South Africa",
                      "label": "Country"
                    },
                    {
                      "value": "1035",
                      "label": "Postal Code"
                    }
                  ],
                  "AddressAudit": null
                },
                {
                  "verification_status": "VS8",
                  "added": "2015-04-30",
                  "street_number": null,
                  "normalised_address": "Centurion, 0046, South Africa",
                  "Geometry": {
                    "location_type": "APPROXIMATE",
                    "bounds": {
                      "northeast": {
                        "lat": -25.840788,
                        "lng": 28.213238
                      },
                      "southwest": {
                        "lat": -25.8810879,
                        "lng": 28.0154669
                      }
                    },
                    "viewport": {
                      "northeast": {
                        "lat": -25.840788,
                        "lng": 28.0425611
                      },
                      "southwest": {
                        "lat": -25.857882,
                        "lng": 28.0154669
                      }
                    },
                    "location": {
                      "lat": -25.8512664,
                      "lng": 28.0332463
                    }
                  },
                  "HasDocuments": false,
                  "last_update": "2016-07-31",
                  "is_default": false,
                  "RecordID": null,
                  "documents": null,
                  "address_components": [
                    {
                      "value": "0046",
                      "label": "Postal Code"
                    },
                    {
                      "value": "Centurion",
                      "label": "Locality"
                    },
                    {
                      "value": "Pretoria",
                      "label": "City"
                    },
                    {
                      "value": "Gauteng",
                      "label": "Province"
                    },
                    {
                      "value": "South Africa",
                      "label": "Country"
                    }
                  ],
                  "AddressAudit": null
                }
              ],
              "tim_id": "TIM_0B655F13-DA22D1D4-BE36E6A4",
              "contact_data": {
                "email_address": [
                  {
                    "is_validated": true,
                    "added": "2016-03-02 15:55:06",
                    "email_address": "tyronesmith@gmail.com",
                    "last_update": "2016-03-02 15:56:16"
                  }
                ],
                "mobile_number": [
                  {
                    "is_validated": true,
                    "added": "2016-03-02 15:55:06 UTC",
                    "number": "+27824414851",
                    "number_type": "Cell",
                    "last_update": "2016-03-07 09:16:33 UTC"
                  },
                  {
                    "is_validated": "N",
                    "added": "2008-05-07",
                    "number": "+27824414851",
                    "number_type": "Residential",
                    "last_update": "2016-08-31"
                  },
                  {
                    "is_validated": "N",
                    "added": "2007-04-21",
                    "number": "+27136924963",
                    "number_type": "Residential",
                    "last_update": "2016-08-31"
                  },
                  {
                    "is_validated": "N",
                    "added": "2012-05-31",
                    "number": "+27113024308",
                    "number_type": "Work",
                    "last_update": "2016-08-31"
                  },
                  {
                    "is_validated": "N",
                    "added": "2015-04-30",
                    "number": "+27113024000",
                    "number_type": "Work",
                    "last_update": "2016-07-31"
                  },
                  {
                    "is_validated": "N",
                    "added": "2011-12-31",
                    "number": "+27113024803",
                    "number_type": "Work",
                    "last_update": "2016-06-30"
                  }
                ]
              }
            },
            "run_trace": null,
            "identity_number": "8211085066081",
            "country_code": null,
            "identity_type": "ID",
            "report_type": "FICAB",
            "report_settings": {
              "timezone": "Africa/Johannesburg"
            },
            "for_company": "Silica",
            "requested_modules": []
          },
          "reference": "EOxdPkE5RxdY80W42XeM9DWXVvwplDJGB7Mn9KOWDJ"
        },
        "request_id": "a434230fb8964230b8ef17d0ab0e4658"
      }
    },
    {
      "RiskAndCompliance": [
			  [
				{
				  "ActiveStatus": "Active",
				  "Deceased": "No",
				  "Gender": "Male",
				  "PersonDJID": "2532871",
				  "FirstName": "Tyrone",
				  "MiddleName": null,
				  "Surname": "Smith",
				  "MaidenName": null,
				  "DateType": null,
				  "DateYear": null,
				  "DateMonth": null,
				  "DateDay": null,
				  "CountryName": [
					"United States",
					"United States"
				  ],
				  "CountryValueCode": [
					"USA",
					"USA"
				  ],
				  "Description1Name": "Special Interest Person (SIP)",
				  "Description2Name": "Financial Crime",
				  "Description3Name": "Lower Threshold"
				}
			  ]
			]
    },
    {
      "MobileNumberLookup": {
        "NumberSearched": "+27824414851",
        "Result": "TYRONE SMITH"
      }
    },
    {
      "TelephoneNumberLookup": {
        "NumberSearched": "+27824414851",
        "Result": "TYRONE SMITH"
      }
    },
    {
      "EmailCompromised": "[{\"Title\":\"LinkedIn\",\"Name\":\"LinkedIn\",\"Domain\":\"linkedin.com\",\"BreachDate\":\"2012-05-05\",\"AddedDate\":\"2016-05-21T21:35:40Z\",\"PwnCount\":164611595,\"Description\":\"In May 2016, <a href=\\\"https://www.troyhunt.com/observations-and-thoughts-on-the-linkedin-data-breach\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">LinkedIn had 164 million email addresses and passwords exposed</a>. Originally hacked in 2012, the data remained out of sight until being offered for sale on a dark market site 4 years later. The passwords in the breach were stored as SHA1 hashes without salt, the vast majority of which were quickly cracked in the days following the release of the data.\",\"DataClasses\":[\"Email addresses\",\"Passwords\"],\"IsVerified\":true,\"IsSensitive\":false,\"IsActive\":true,\"IsRetired\":false,\"LogoType\":\"svg\"}]"
    },
    {
      "IDDocument": [
        {
          "faceAnnotations": [
            {
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1024,
                    "y": 265
                  },
                  {
                    "x": 1324,
                    "y": 265
                  },
                  {
                    "x": 1324,
                    "y": 614
                  },
                  {
                    "x": 1024,
                    "y": 614
                  }
                ]
              },
              "fdBoundingPoly": {
                "vertices": [
                  {
                    "x": 1065,
                    "y": 333
                  },
                  {
                    "x": 1290,
                    "y": 333
                  },
                  {
                    "x": 1290,
                    "y": 558
                  },
                  {
                    "x": 1065,
                    "y": 558
                  }
                ]
              },
              "landmarks": [
                {
                  "type": "LEFT_EYE",
                  "position": {
                    "x": 1133.6967,
                    "y": 402.98154,
                    "z": 0.0027347677
                  }
                },
                {
                  "type": "RIGHT_EYE",
                  "position": {
                    "x": 1218.2628,
                    "y": 402.73807,
                    "z": 0.80956012
                  }
                },
                {
                  "type": "LEFT_OF_LEFT_EYEBROW",
                  "position": {
                    "x": 1099.8212,
                    "y": 389.13452,
                    "z": 11.76985
                  }
                },
                {
                  "type": "RIGHT_OF_LEFT_EYEBROW",
                  "position": {
                    "x": 1153.3691,
                    "y": 380.80402,
                    "z": -12.959299
                  }
                },
                {
                  "type": "LEFT_OF_RIGHT_EYEBROW",
                  "position": {
                    "x": 1199.8961,
                    "y": 382.23416,
                    "z": -12.624312
                  }
                },
                {
                  "type": "RIGHT_OF_RIGHT_EYEBROW",
                  "position": {
                    "x": 1250.5896,
                    "y": 388.87909,
                    "z": 12.580488
                  }
                },
                {
                  "type": "MIDPOINT_BETWEEN_EYES",
                  "position": {
                    "x": 1177.4514,
                    "y": 399.489,
                    "z": -18.144285
                  }
                },
                {
                  "type": "NOSE_TIP",
                  "position": {
                    "x": 1176.8621,
                    "y": 443.86548,
                    "z": -55.227306
                  }
                },
                {
                  "type": "UPPER_LIP",
                  "position": {
                    "x": 1174.7811,
                    "y": 488.00189,
                    "z": -41.750523
                  }
                },
                {
                  "type": "LOWER_LIP",
                  "position": {
                    "x": 1174.2961,
                    "y": 511.66937,
                    "z": -41.133553
                  }
                },
                {
                  "type": "MOUTH_LEFT",
                  "position": {
                    "x": 1140.0922,
                    "y": 501.61661,
                    "z": -20.843657
                  }
                },
                {
                  "type": "MOUTH_RIGHT",
                  "position": {
                    "x": 1208.8984,
                    "y": 502.19684,
                    "z": -20.652277
                  }
                },
                {
                  "type": "MOUTH_CENTER",
                  "position": {
                    "x": 1174.4773,
                    "y": 498.34244,
                    "z": -37.695454
                  }
                },
                {
                  "type": "NOSE_BOTTOM_RIGHT",
                  "position": {
                    "x": 1199.7917,
                    "y": 461.69916,
                    "z": -22.58902
                  }
                },
                {
                  "type": "NOSE_BOTTOM_LEFT",
                  "position": {
                    "x": 1152.277,
                    "y": 459.92548,
                    "z": -23.021975
                  }
                },
                {
                  "type": "NOSE_BOTTOM_CENTER",
                  "position": {
                    "x": 1176.4858,
                    "y": 462.14032,
                    "z": -37.610165
                  }
                },
                {
                  "type": "LEFT_EYE_TOP_BOUNDARY",
                  "position": {
                    "x": 1130.3077,
                    "y": 398.15881,
                    "z": -4.906467
                  }
                },
                {
                  "type": "LEFT_EYE_RIGHT_CORNER",
                  "position": {
                    "x": 1150.9355,
                    "y": 406.53082,
                    "z": -0.061617643
                  }
                },
                {
                  "type": "LEFT_EYE_BOTTOM_BOUNDARY",
                  "position": {
                    "x": 1132.2141,
                    "y": 411.57275,
                    "z": -2.3789244
                  }
                },
                {
                  "type": "LEFT_EYE_LEFT_CORNER",
                  "position": {
                    "x": 1112.4755,
                    "y": 407.21481,
                    "z": 7.6196408
                  }
                },
                {
                  "type": "LEFT_EYE_PUPIL",
                  "position": {
                    "x": 1128.7325,
                    "y": 405.32898,
                    "z": -2.3057058
                  }
                },
                {
                  "type": "RIGHT_EYE_TOP_BOUNDARY",
                  "position": {
                    "x": 1221.4089,
                    "y": 398.9259,
                    "z": -4.2368889
                  }
                },
                {
                  "type": "RIGHT_EYE_RIGHT_CORNER",
                  "position": {
                    "x": 1238.8326,
                    "y": 407.48413,
                    "z": 8.6060085
                  }
                },
                {
                  "type": "RIGHT_EYE_BOTTOM_BOUNDARY",
                  "position": {
                    "x": 1218.5157,
                    "y": 410.919,
                    "z": -1.6292536
                  }
                },
                {
                  "type": "RIGHT_EYE_LEFT_CORNER",
                  "position": {
                    "x": 1200.7058,
                    "y": 405.549,
                    "z": 0.42514405
                  }
                },
                {
                  "type": "RIGHT_EYE_PUPIL",
                  "position": {
                    "x": 1222.2974,
                    "y": 406.05505,
                    "z": -1.7127284
                  }
                },
                {
                  "type": "LEFT_EYEBROW_UPPER_MIDPOINT",
                  "position": {
                    "x": 1126.5734,
                    "y": 371.69193,
                    "z": -3.9057696
                  }
                },
                {
                  "type": "RIGHT_EYEBROW_UPPER_MIDPOINT",
                  "position": {
                    "x": 1225.6097,
                    "y": 372.57336,
                    "z": -3.2402356
                  }
                },
                {
                  "type": "LEFT_EAR_TRAGION",
                  "position": {
                    "x": 1070.9084,
                    "y": 472.78415,
                    "z": 99.832191
                  }
                },
                {
                  "type": "RIGHT_EAR_TRAGION",
                  "position": {
                    "x": 1278.1053,
                    "y": 474.73956,
                    "z": 101.40473
                  }
                },
                {
                  "type": "FOREHEAD_GLABELLA",
                  "position": {
                    "x": 1176.2045,
                    "y": 379.44153,
                    "z": -15.917143
                  }
                },
                {
                  "type": "CHIN_GNATHION",
                  "position": {
                    "x": 1174.3044,
                    "y": 557.43127,
                    "z": -37.107834
                  }
                },
                {
                  "type": "CHIN_LEFT_GONION",
                  "position": {
                    "x": 1080.7068,
                    "y": 522.43335,
                    "z": 51.269581
                  }
                },
                {
                  "type": "CHIN_RIGHT_GONION",
                  "position": {
                    "x": 1268.106,
                    "y": 524.12061,
                    "z": 52.608093
                  }
                }
              ],
              "rollAngle": 0.40656468,
              "panAngle": 0.42605004,
              "tiltAngle": 12.111589,
              "detectionConfidence": 0.94329143,
              "landmarkingConfidence": 0.82209945,
              "joyLikelihood": "VERY_UNLIKELY",
              "sorrowLikelihood": "UNLIKELY",
              "angerLikelihood": "VERY_UNLIKELY",
              "surpriseLikelihood": "VERY_UNLIKELY",
              "underExposedLikelihood": "VERY_UNLIKELY",
              "blurredLikelihood": "VERY_UNLIKELY",
              "headwearLikelihood": "VERY_UNLIKELY"
            }
          ],
          "labelAnnotations": [
            {
              "mid": "/m/0fd6q",
              "description": "cash",
              "score": 0.87038136
            },
            {
              "mid": "/m/01q7l",
              "description": "currency",
              "score": 0.82432967
            },
            {
              "mid": "/m/01_v7j",
              "description": "identity document",
              "score": 0.73508614
            },
            {
              "mid": "/m/01dl3j",
              "description": "banknote",
              "score": 0.69032639
            },
            {
              "mid": "/m/04_x4",
              "description": "money",
              "score": 0.675475
            },
            {
              "mid": "/m/0641k",
              "description": "paper",
              "score": 0.61544365
            }
          ],
          "textAnnotations": [
            {
              "locale": "en",
              "description": "REPUBLIC OF SOUTH AFRICA\nNATIONAL IDENTITY CARD\nSurname:\nSMITH\nNames:\nTYRONE\nNationality:\nRSA\nIdentity Number:\n8211085066081\nDate of Birth\n08 NOV 1982\nCountry of Birth\nSignature\nRSA\nStatus:\nCITIZEN\n",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 604,
                    "y": 156
                  },
                  {
                    "x": 1275,
                    "y": 156
                  },
                  {
                    "x": 1275,
                    "y": 730
                  },
                  {
                    "x": 604,
                    "y": 730
                  }
                ]
              }
            },
            {
              "description": "REPUBLIC",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 604,
                    "y": 156
                  },
                  {
                    "x": 825,
                    "y": 156
                  },
                  {
                    "x": 825,
                    "y": 201
                  },
                  {
                    "x": 604,
                    "y": 201
                  }
                ]
              }
            },
            {
              "description": "OF",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 854,
                    "y": 156
                  },
                  {
                    "x": 908,
                    "y": 156
                  },
                  {
                    "x": 908,
                    "y": 201
                  },
                  {
                    "x": 854,
                    "y": 201
                  }
                ]
              }
            },
            {
              "description": "SOUTH",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 926,
                    "y": 156
                  },
                  {
                    "x": 1090,
                    "y": 156
                  },
                  {
                    "x": 1090,
                    "y": 201
                  },
                  {
                    "x": 926,
                    "y": 201
                  }
                ]
              }
            },
            {
              "description": "AFRICA",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1104,
                    "y": 156
                  },
                  {
                    "x": 1273,
                    "y": 156
                  },
                  {
                    "x": 1273,
                    "y": 201
                  },
                  {
                    "x": 1104,
                    "y": 201
                  }
                ]
              }
            },
            {
              "description": "NATIONAL",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 605,
                    "y": 205
                  },
                  {
                    "x": 868,
                    "y": 205
                  },
                  {
                    "x": 868,
                    "y": 231
                  },
                  {
                    "x": 605,
                    "y": 231
                  }
                ]
              }
            },
            {
              "description": "IDENTITY",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 885,
                    "y": 205
                  },
                  {
                    "x": 1115,
                    "y": 205
                  },
                  {
                    "x": 1115,
                    "y": 231
                  },
                  {
                    "x": 885,
                    "y": 231
                  }
                ]
              }
            },
            {
              "description": "CARD",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1139,
                    "y": 205
                  },
                  {
                    "x": 1275,
                    "y": 205
                  },
                  {
                    "x": 1275,
                    "y": 231
                  },
                  {
                    "x": 1139,
                    "y": 231
                  }
                ]
              }
            },
            {
              "description": "Surname:",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 605,
                    "y": 268
                  },
                  {
                    "x": 717,
                    "y": 268
                  },
                  {
                    "x": 717,
                    "y": 291
                  },
                  {
                    "x": 605,
                    "y": 291
                  }
                ]
              }
            },
            {
              "description": "SMITH",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 608,
                    "y": 297
                  },
                  {
                    "x": 696,
                    "y": 297
                  },
                  {
                    "x": 696,
                    "y": 324
                  },
                  {
                    "x": 608,
                    "y": 324
                  }
                ]
              }
            },
            {
              "description": "Names:",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 607,
                    "y": 328
                  },
                  {
                    "x": 694,
                    "y": 328
                  },
                  {
                    "x": 694,
                    "y": 348
                  },
                  {
                    "x": 607,
                    "y": 348
                  }
                ]
              }
            },
            {
              "description": "TYRONE",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 607,
                    "y": 357
                  },
                  {
                    "x": 724,
                    "y": 357
                  },
                  {
                    "x": 724,
                    "y": 380
                  },
                  {
                    "x": 607,
                    "y": 380
                  }
                ]
              }
            },
            {
              "description": "Nationality:",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 608,
                    "y": 440
                  },
                  {
                    "x": 735,
                    "y": 439
                  },
                  {
                    "x": 735,
                    "y": 469
                  },
                  {
                    "x": 608,
                    "y": 470
                  }
                ]
              }
            },
            {
              "description": "RSA",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 609,
                    "y": 473
                  },
                  {
                    "x": 668,
                    "y": 473
                  },
                  {
                    "x": 668,
                    "y": 496
                  },
                  {
                    "x": 609,
                    "y": 496
                  }
                ]
              }
            },
            {
              "description": "Identity",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 608,
                    "y": 499
                  },
                  {
                    "x": 687,
                    "y": 498
                  },
                  {
                    "x": 687,
                    "y": 526
                  },
                  {
                    "x": 608,
                    "y": 527
                  }
                ]
              }
            },
            {
              "description": "Number:",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 698,
                    "y": 498
                  },
                  {
                    "x": 795,
                    "y": 497
                  },
                  {
                    "x": 795,
                    "y": 525
                  },
                  {
                    "x": 698,
                    "y": 526
                  }
                ]
              }
            },
            {
              "description": "8211085066081",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 610,
                    "y": 530
                  },
                  {
                    "x": 812,
                    "y": 528
                  },
                  {
                    "x": 812,
                    "y": 553
                  },
                  {
                    "x": 610,
                    "y": 555
                  }
                ]
              }
            },
            {
              "description": "Date",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 608,
                    "y": 558
                  },
                  {
                    "x": 661,
                    "y": 557
                  },
                  {
                    "x": 662,
                    "y": 583
                  },
                  {
                    "x": 609,
                    "y": 584
                  }
                ]
              }
            },
            {
              "description": "of",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 673,
                    "y": 557
                  },
                  {
                    "x": 692,
                    "y": 557
                  },
                  {
                    "x": 693,
                    "y": 583
                  },
                  {
                    "x": 674,
                    "y": 583
                  }
                ]
              }
            },
            {
              "description": "Birth",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 701,
                    "y": 557
                  },
                  {
                    "x": 751,
                    "y": 556
                  },
                  {
                    "x": 752,
                    "y": 582
                  },
                  {
                    "x": 702,
                    "y": 583
                  }
                ]
              }
            },
            {
              "description": "08",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 611,
                    "y": 588
                  },
                  {
                    "x": 641,
                    "y": 588
                  },
                  {
                    "x": 641,
                    "y": 616
                  },
                  {
                    "x": 611,
                    "y": 616
                  }
                ]
              }
            },
            {
              "description": "NOV",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 651,
                    "y": 587
                  },
                  {
                    "x": 704,
                    "y": 586
                  },
                  {
                    "x": 704,
                    "y": 614
                  },
                  {
                    "x": 651,
                    "y": 615
                  }
                ]
              }
            },
            {
              "description": "1982",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 718,
                    "y": 586
                  },
                  {
                    "x": 780,
                    "y": 585
                  },
                  {
                    "x": 780,
                    "y": 613
                  },
                  {
                    "x": 718,
                    "y": 614
                  }
                ]
              }
            },
            {
              "description": "Country",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 609,
                    "y": 613
                  },
                  {
                    "x": 697,
                    "y": 611
                  },
                  {
                    "x": 698,
                    "y": 644
                  },
                  {
                    "x": 610,
                    "y": 646
                  }
                ]
              }
            },
            {
              "description": "of",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 708,
                    "y": 612
                  },
                  {
                    "x": 727,
                    "y": 612
                  },
                  {
                    "x": 728,
                    "y": 643
                  },
                  {
                    "x": 709,
                    "y": 643
                  }
                ]
              }
            },
            {
              "description": "Birth",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 736,
                    "y": 616
                  },
                  {
                    "x": 788,
                    "y": 616
                  },
                  {
                    "x": 788,
                    "y": 639
                  },
                  {
                    "x": 736,
                    "y": 639
                  }
                ]
              }
            },
            {
              "description": "Signature",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1150,
                    "y": 627
                  },
                  {
                    "x": 1257,
                    "y": 622
                  },
                  {
                    "x": 1258,
                    "y": 650
                  },
                  {
                    "x": 1151,
                    "y": 655
                  }
                ]
              }
            },
            {
              "description": "RSA",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 611,
                    "y": 644
                  },
                  {
                    "x": 669,
                    "y": 647
                  },
                  {
                    "x": 668,
                    "y": 672
                  },
                  {
                    "x": 610,
                    "y": 669
                  }
                ]
              }
            },
            {
              "description": "Status:",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 609,
                    "y": 677
                  },
                  {
                    "x": 690,
                    "y": 675
                  },
                  {
                    "x": 690,
                    "y": 697
                  },
                  {
                    "x": 609,
                    "y": 699
                  }
                ]
              }
            },
            {
              "description": "CITIZEN",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 610,
                    "y": 705
                  },
                  {
                    "x": 722,
                    "y": 703
                  },
                  {
                    "x": 722,
                    "y": 728
                  },
                  {
                    "x": 610,
                    "y": 730
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "AddressDocument": [
        {
          "labelAnnotations": [
            {
              "mid": "/m/07s6nbt",
              "description": "text",
              "score": 0.88086188
            },
            {
              "mid": "/m/03scnj",
              "description": "line",
              "score": 0.71872574
            },
            {
              "mid": "/m/03gq5hm",
              "description": "font",
              "score": 0.68652558
            },
            {
              "mid": "/m/02v0m2",
              "description": "diagram",
              "score": 0.65924609
            },
            {
              "mid": "/m/016nqd",
              "description": "shape",
              "score": 0.59406006
            }
          ],
          "textAnnotations": [
            {
              "locale": "en",
              "description": "G Tel: 012 358 9999\nFax: 012 359 6111\nCITY OF\nE-Mail: customercare@tshwane.gov.za.\nTSHWANE\nAddress: PO Box 408 Pretoria l 0001\nCopy of TAX invoice 75003575368\nssued\n01/06/15\nAccount No\nSMITH, T\n5001235409\nPOSTNET SUITE 424\n8211085066081\nPRIVITE BAG 108\nCENTURION\n0046\nPage\nof 2\nTownship\nAccount for\nTHE REEDS X36\nSectional title scheme\n4976 A ROOIBOS STREET\nGuarantee date\nMeter reading unit\nGroup account\nDeposit date\nGuarantee\n0166704A\nGISKEY\nBP\n066704976\n718139\n(R) MOUNT\nR AMOUNT\nDATE\nR) VAT\nDETAILS\nexcl. VAT\nncl. VAT)\nBalance Brought Forward\n04/05/15\n07.53\n0.00\n07.53\nPayment IThank You)\n22/05/15\n07.00\n0.00\n07.00\nSub Total (A)\n0.53\n0.00\n01/06/15\n0.53\nProperty Rates\n01/06/15\n680.05\n0.00\n680.05\n01/06/15\nWaste Management\n86.86\n26.16\n213.02\n01/06/15\nWate\n217.10\n30.39\n247.49\n01/06/15\nSanitation\n22.5\n7.16\n39.67\nVAT 14% on services of R 526.47\n0.00\n73.70\n0.00\nTotal Current Levy (B)\n206.52\n73.70\n280.22\n127.05 1200.00\nTOTAL AMOUNT PAYABLE (A+B)\nTotal charge\n30-90 Days\n(including VAT)\n1280.00\nAMOUNT\n1280.00\nDUE DATE\n22/06/15\nPAYABLE\nTHIS STUB MUST ACCOMPANY PAYMENT\nFinal date for payment\nAccount no\nName\n280.00\n5001235409\nSMITH, T\n22/06/15\n9 1945 5001235409 8\nPlease use this Ref. no. when making Bank\nPayments Ref. no\nFirst National Bank\n5001235409\ncDABSA\nTAX invoice: 75003575368\nStandard Bank\nNNEDBANK\nCITY OF TSHWANE VAT REG NO 4000142267\n",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 108,
                    "y": 86
                  },
                  {
                    "x": 1927,
                    "y": 86
                  },
                  {
                    "x": 1927,
                    "y": 2941
                  },
                  {
                    "x": 108,
                    "y": 2941
                  }
                ]
              }
            },
            {
              "description": "G",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1119,
                    "y": 86
                  },
                  {
                    "x": 1172,
                    "y": 86
                  },
                  {
                    "x": 1172,
                    "y": 145
                  },
                  {
                    "x": 1119,
                    "y": 145
                  }
                ]
              }
            },
            {
              "description": "Tel:",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1208,
                    "y": 101
                  },
                  {
                    "x": 1278,
                    "y": 101
                  },
                  {
                    "x": 1278,
                    "y": 135
                  },
                  {
                    "x": 1208,
                    "y": 135
                  }
                ]
              }
            },
            {
              "description": "012",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1289,
                    "y": 101
                  },
                  {
                    "x": 1361,
                    "y": 101
                  },
                  {
                    "x": 1361,
                    "y": 135
                  },
                  {
                    "x": 1289,
                    "y": 135
                  }
                ]
              }
            },
            {
              "description": "358",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1376,
                    "y": 86
                  },
                  {
                    "x": 1433,
                    "y": 86
                  },
                  {
                    "x": 1433,
                    "y": 145
                  },
                  {
                    "x": 1376,
                    "y": 145
                  }
                ]
              }
            },
            {
              "description": "9999",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1454,
                    "y": 101
                  },
                  {
                    "x": 1544,
                    "y": 101
                  },
                  {
                    "x": 1544,
                    "y": 135
                  },
                  {
                    "x": 1454,
                    "y": 135
                  }
                ]
              }
            },
            {
              "description": "Fax:",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1213,
                    "y": 175
                  },
                  {
                    "x": 1296,
                    "y": 175
                  },
                  {
                    "x": 1296,
                    "y": 212
                  },
                  {
                    "x": 1213,
                    "y": 212
                  }
                ]
              }
            },
            {
              "description": "012",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1307,
                    "y": 175
                  },
                  {
                    "x": 1377,
                    "y": 175
                  },
                  {
                    "x": 1377,
                    "y": 212
                  },
                  {
                    "x": 1307,
                    "y": 212
                  }
                ]
              }
            },
            {
              "description": "359",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1393,
                    "y": 175
                  },
                  {
                    "x": 1450,
                    "y": 175
                  },
                  {
                    "x": 1450,
                    "y": 212
                  },
                  {
                    "x": 1393,
                    "y": 212
                  }
                ]
              }
            },
            {
              "description": "6111",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1467,
                    "y": 175
                  },
                  {
                    "x": 1553,
                    "y": 175
                  },
                  {
                    "x": 1553,
                    "y": 212
                  },
                  {
                    "x": 1467,
                    "y": 212
                  }
                ]
              }
            },
            {
              "description": "CITY",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 197,
                    "y": 242
                  },
                  {
                    "x": 244,
                    "y": 242
                  },
                  {
                    "x": 244,
                    "y": 262
                  },
                  {
                    "x": 197,
                    "y": 262
                  }
                ]
              }
            },
            {
              "description": "OF",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 255,
                    "y": 242
                  },
                  {
                    "x": 289,
                    "y": 242
                  },
                  {
                    "x": 289,
                    "y": 262
                  },
                  {
                    "x": 255,
                    "y": 262
                  }
                ]
              }
            },
            {
              "description": "E-Mail:",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1211,
                    "y": 258
                  },
                  {
                    "x": 1325,
                    "y": 258
                  },
                  {
                    "x": 1325,
                    "y": 297
                  },
                  {
                    "x": 1211,
                    "y": 297
                  }
                ]
              }
            },
            {
              "description": "customercare@tshwane.gov.za.",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1335,
                    "y": 258
                  },
                  {
                    "x": 1864,
                    "y": 258
                  },
                  {
                    "x": 1864,
                    "y": 297
                  },
                  {
                    "x": 1335,
                    "y": 297
                  }
                ]
              }
            },
            {
              "description": "TSHWANE",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 197,
                    "y": 264
                  },
                  {
                    "x": 399,
                    "y": 264
                  },
                  {
                    "x": 399,
                    "y": 303
                  },
                  {
                    "x": 197,
                    "y": 303
                  }
                ]
              }
            },
            {
              "description": "Address:",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1216,
                    "y": 330
                  },
                  {
                    "x": 1363,
                    "y": 330
                  },
                  {
                    "x": 1363,
                    "y": 366
                  },
                  {
                    "x": 1216,
                    "y": 366
                  }
                ]
              }
            },
            {
              "description": "PO",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1368,
                    "y": 330
                  },
                  {
                    "x": 1444,
                    "y": 330
                  },
                  {
                    "x": 1444,
                    "y": 366
                  },
                  {
                    "x": 1368,
                    "y": 366
                  }
                ]
              }
            },
            {
              "description": "Box",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1452,
                    "y": 330
                  },
                  {
                    "x": 1513,
                    "y": 330
                  },
                  {
                    "x": 1513,
                    "y": 366
                  },
                  {
                    "x": 1452,
                    "y": 366
                  }
                ]
              }
            },
            {
              "description": "408",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1526,
                    "y": 330
                  },
                  {
                    "x": 1585,
                    "y": 330
                  },
                  {
                    "x": 1585,
                    "y": 366
                  },
                  {
                    "x": 1526,
                    "y": 366
                  }
                ]
              }
            },
            {
              "description": "Pretoria",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1622,
                    "y": 330
                  },
                  {
                    "x": 1748,
                    "y": 330
                  },
                  {
                    "x": 1748,
                    "y": 366
                  },
                  {
                    "x": 1622,
                    "y": 366
                  }
                ]
              }
            },
            {
              "description": "l",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1763,
                    "y": 330
                  },
                  {
                    "x": 1773,
                    "y": 330
                  },
                  {
                    "x": 1773,
                    "y": 366
                  },
                  {
                    "x": 1763,
                    "y": 366
                  }
                ]
              }
            },
            {
              "description": "0001",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1783,
                    "y": 330
                  },
                  {
                    "x": 1861,
                    "y": 330
                  },
                  {
                    "x": 1861,
                    "y": 366
                  },
                  {
                    "x": 1783,
                    "y": 366
                  }
                ]
              }
            },
            {
              "description": "Copy",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 197,
                    "y": 341
                  },
                  {
                    "x": 259,
                    "y": 341
                  },
                  {
                    "x": 259,
                    "y": 373
                  },
                  {
                    "x": 197,
                    "y": 373
                  }
                ]
              }
            },
            {
              "description": "of",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 272,
                    "y": 341
                  },
                  {
                    "x": 297,
                    "y": 341
                  },
                  {
                    "x": 297,
                    "y": 373
                  },
                  {
                    "x": 272,
                    "y": 373
                  }
                ]
              }
            },
            {
              "description": "TAX",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 304,
                    "y": 341
                  },
                  {
                    "x": 360,
                    "y": 341
                  },
                  {
                    "x": 360,
                    "y": 373
                  },
                  {
                    "x": 304,
                    "y": 373
                  }
                ]
              }
            },
            {
              "description": "invoice",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 366,
                    "y": 341
                  },
                  {
                    "x": 455,
                    "y": 341
                  },
                  {
                    "x": 455,
                    "y": 373
                  },
                  {
                    "x": 366,
                    "y": 373
                  }
                ]
              }
            },
            {
              "description": "75003575368",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 526,
                    "y": 346
                  },
                  {
                    "x": 706,
                    "y": 346
                  },
                  {
                    "x": 706,
                    "y": 371
                  },
                  {
                    "x": 526,
                    "y": 371
                  }
                ]
              }
            },
            {
              "description": "ssued",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 205,
                    "y": 394
                  },
                  {
                    "x": 284,
                    "y": 394
                  },
                  {
                    "x": 284,
                    "y": 420
                  },
                  {
                    "x": 205,
                    "y": 420
                  }
                ]
              }
            },
            {
              "description": "01/06/15",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 363,
                    "y": 394
                  },
                  {
                    "x": 478,
                    "y": 394
                  },
                  {
                    "x": 478,
                    "y": 420
                  },
                  {
                    "x": 363,
                    "y": 420
                  }
                ]
              }
            },
            {
              "description": "Account",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1311,
                    "y": 394
                  },
                  {
                    "x": 1417,
                    "y": 394
                  },
                  {
                    "x": 1417,
                    "y": 420
                  },
                  {
                    "x": 1311,
                    "y": 420
                  }
                ]
              }
            },
            {
              "description": "No",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1427,
                    "y": 394
                  },
                  {
                    "x": 1464,
                    "y": 394
                  },
                  {
                    "x": 1464,
                    "y": 420
                  },
                  {
                    "x": 1427,
                    "y": 420
                  }
                ]
              }
            },
            {
              "description": "SMITH,",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 363,
                    "y": 443
                  },
                  {
                    "x": 460,
                    "y": 443
                  },
                  {
                    "x": 460,
                    "y": 469
                  },
                  {
                    "x": 363,
                    "y": 469
                  }
                ]
              }
            },
            {
              "description": "T",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 470,
                    "y": 443
                  },
                  {
                    "x": 491,
                    "y": 443
                  },
                  {
                    "x": 491,
                    "y": 469
                  },
                  {
                    "x": 470,
                    "y": 469
                  }
                ]
              }
            },
            {
              "description": "5001235409",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1462,
                    "y": 449
                  },
                  {
                    "x": 1622,
                    "y": 449
                  },
                  {
                    "x": 1622,
                    "y": 477
                  },
                  {
                    "x": 1462,
                    "y": 477
                  }
                ]
              }
            },
            {
              "description": "POSTNET",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 365,
                    "y": 496
                  },
                  {
                    "x": 504,
                    "y": 496
                  },
                  {
                    "x": 504,
                    "y": 525
                  },
                  {
                    "x": 365,
                    "y": 525
                  }
                ]
              }
            },
            {
              "description": "SUITE",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 510,
                    "y": 496
                  },
                  {
                    "x": 591,
                    "y": 496
                  },
                  {
                    "x": 591,
                    "y": 525
                  },
                  {
                    "x": 510,
                    "y": 525
                  }
                ]
              }
            },
            {
              "description": "424",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 606,
                    "y": 496
                  },
                  {
                    "x": 654,
                    "y": 496
                  },
                  {
                    "x": 654,
                    "y": 525
                  },
                  {
                    "x": 606,
                    "y": 525
                  }
                ]
              }
            },
            {
              "description": "8211085066081",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1416,
                    "y": 512
                  },
                  {
                    "x": 1626,
                    "y": 512
                  },
                  {
                    "x": 1626,
                    "y": 537
                  },
                  {
                    "x": 1416,
                    "y": 537
                  }
                ]
              }
            },
            {
              "description": "PRIVITE",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 365,
                    "y": 553
                  },
                  {
                    "x": 473,
                    "y": 553
                  },
                  {
                    "x": 473,
                    "y": 581
                  },
                  {
                    "x": 365,
                    "y": 581
                  }
                ]
              }
            },
            {
              "description": "BAG",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 487,
                    "y": 553
                  },
                  {
                    "x": 541,
                    "y": 553
                  },
                  {
                    "x": 541,
                    "y": 581
                  },
                  {
                    "x": 487,
                    "y": 581
                  }
                ]
              }
            },
            {
              "description": "108",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 557,
                    "y": 553
                  },
                  {
                    "x": 610,
                    "y": 553
                  },
                  {
                    "x": 610,
                    "y": 581
                  },
                  {
                    "x": 557,
                    "y": 581
                  }
                ]
              }
            },
            {
              "description": "CENTURION",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 366,
                    "y": 606
                  },
                  {
                    "x": 537,
                    "y": 607
                  },
                  {
                    "x": 537,
                    "y": 637
                  },
                  {
                    "x": 366,
                    "y": 636
                  }
                ]
              }
            },
            {
              "description": "0046",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 363,
                    "y": 663
                  },
                  {
                    "x": 428,
                    "y": 663
                  },
                  {
                    "x": 428,
                    "y": 688
                  },
                  {
                    "x": 363,
                    "y": 688
                  }
                ]
              }
            },
            {
              "description": "Page",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1456,
                    "y": 766
                  },
                  {
                    "x": 1523,
                    "y": 766
                  },
                  {
                    "x": 1523,
                    "y": 797
                  },
                  {
                    "x": 1456,
                    "y": 797
                  }
                ]
              }
            },
            {
              "description": "of",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1562,
                    "y": 766
                  },
                  {
                    "x": 1588,
                    "y": 766
                  },
                  {
                    "x": 1588,
                    "y": 792
                  },
                  {
                    "x": 1562,
                    "y": 792
                  }
                ]
              }
            },
            {
              "description": "2",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1601,
                    "y": 766
                  },
                  {
                    "x": 1613,
                    "y": 766
                  },
                  {
                    "x": 1613,
                    "y": 792
                  },
                  {
                    "x": 1601,
                    "y": 792
                  }
                ]
              }
            },
            {
              "description": "Township",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1054,
                    "y": 829
                  },
                  {
                    "x": 1180,
                    "y": 829
                  },
                  {
                    "x": 1180,
                    "y": 854
                  },
                  {
                    "x": 1054,
                    "y": 854
                  }
                ]
              }
            },
            {
              "description": "Account",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 109,
                    "y": 832
                  },
                  {
                    "x": 211,
                    "y": 832
                  },
                  {
                    "x": 211,
                    "y": 859
                  },
                  {
                    "x": 109,
                    "y": 859
                  }
                ]
              }
            },
            {
              "description": "for",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 221,
                    "y": 832
                  },
                  {
                    "x": 257,
                    "y": 832
                  },
                  {
                    "x": 257,
                    "y": 859
                  },
                  {
                    "x": 221,
                    "y": 859
                  }
                ]
              }
            },
            {
              "description": "THE",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1246,
                    "y": 879
                  },
                  {
                    "x": 1302,
                    "y": 879
                  },
                  {
                    "x": 1302,
                    "y": 910
                  },
                  {
                    "x": 1246,
                    "y": 910
                  }
                ]
              }
            },
            {
              "description": "REEDS",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1313,
                    "y": 879
                  },
                  {
                    "x": 1410,
                    "y": 879
                  },
                  {
                    "x": 1410,
                    "y": 910
                  },
                  {
                    "x": 1313,
                    "y": 910
                  }
                ]
              }
            },
            {
              "description": "X36",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1420,
                    "y": 879
                  },
                  {
                    "x": 1472,
                    "y": 879
                  },
                  {
                    "x": 1472,
                    "y": 910
                  },
                  {
                    "x": 1420,
                    "y": 910
                  }
                ]
              }
            },
            {
              "description": "Sectional",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1057,
                    "y": 937
                  },
                  {
                    "x": 1179,
                    "y": 937
                  },
                  {
                    "x": 1179,
                    "y": 966
                  },
                  {
                    "x": 1057,
                    "y": 966
                  }
                ]
              }
            },
            {
              "description": "title",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1186,
                    "y": 937
                  },
                  {
                    "x": 1228,
                    "y": 937
                  },
                  {
                    "x": 1228,
                    "y": 966
                  },
                  {
                    "x": 1186,
                    "y": 966
                  }
                ]
              }
            },
            {
              "description": "scheme",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1239,
                    "y": 937
                  },
                  {
                    "x": 1344,
                    "y": 937
                  },
                  {
                    "x": 1344,
                    "y": 966
                  },
                  {
                    "x": 1239,
                    "y": 966
                  }
                ]
              }
            },
            {
              "description": "4976",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 144,
                    "y": 995
                  },
                  {
                    "x": 203,
                    "y": 995
                  },
                  {
                    "x": 203,
                    "y": 1024
                  },
                  {
                    "x": 144,
                    "y": 1024
                  }
                ]
              }
            },
            {
              "description": "A",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 216,
                    "y": 995
                  },
                  {
                    "x": 237,
                    "y": 995
                  },
                  {
                    "x": 237,
                    "y": 1024
                  },
                  {
                    "x": 216,
                    "y": 1024
                  }
                ]
              }
            },
            {
              "description": "ROOIBOS",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 244,
                    "y": 995
                  },
                  {
                    "x": 380,
                    "y": 995
                  },
                  {
                    "x": 380,
                    "y": 1024
                  },
                  {
                    "x": 244,
                    "y": 1024
                  }
                ]
              }
            },
            {
              "description": "STREET",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 388,
                    "y": 995
                  },
                  {
                    "x": 503,
                    "y": 995
                  },
                  {
                    "x": 503,
                    "y": 1024
                  },
                  {
                    "x": 388,
                    "y": 1024
                  }
                ]
              }
            },
            {
              "description": "Guarantee",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1369,
                    "y": 1050
                  },
                  {
                    "x": 1501,
                    "y": 1050
                  },
                  {
                    "x": 1501,
                    "y": 1080
                  },
                  {
                    "x": 1369,
                    "y": 1080
                  }
                ]
              }
            },
            {
              "description": "date",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1514,
                    "y": 1050
                  },
                  {
                    "x": 1569,
                    "y": 1050
                  },
                  {
                    "x": 1569,
                    "y": 1080
                  },
                  {
                    "x": 1514,
                    "y": 1080
                  }
                ]
              }
            },
            {
              "description": "Meter",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 112,
                    "y": 1051
                  },
                  {
                    "x": 184,
                    "y": 1051
                  },
                  {
                    "x": 184,
                    "y": 1082
                  },
                  {
                    "x": 112,
                    "y": 1082
                  }
                ]
              }
            },
            {
              "description": "reading",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 192,
                    "y": 1051
                  },
                  {
                    "x": 286,
                    "y": 1051
                  },
                  {
                    "x": 286,
                    "y": 1082
                  },
                  {
                    "x": 192,
                    "y": 1082
                  }
                ]
              }
            },
            {
              "description": "unit",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 299,
                    "y": 1051
                  },
                  {
                    "x": 346,
                    "y": 1051
                  },
                  {
                    "x": 346,
                    "y": 1082
                  },
                  {
                    "x": 299,
                    "y": 1082
                  }
                ]
              }
            },
            {
              "description": "Group",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 420,
                    "y": 1051
                  },
                  {
                    "x": 496,
                    "y": 1051
                  },
                  {
                    "x": 496,
                    "y": 1077
                  },
                  {
                    "x": 420,
                    "y": 1077
                  }
                ]
              }
            },
            {
              "description": "account",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 507,
                    "y": 1051
                  },
                  {
                    "x": 612,
                    "y": 1051
                  },
                  {
                    "x": 612,
                    "y": 1077
                  },
                  {
                    "x": 507,
                    "y": 1077
                  }
                ]
              }
            },
            {
              "description": "Deposit",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 744,
                    "y": 1051
                  },
                  {
                    "x": 840,
                    "y": 1051
                  },
                  {
                    "x": 840,
                    "y": 1082
                  },
                  {
                    "x": 744,
                    "y": 1082
                  }
                ]
              }
            },
            {
              "description": "date",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 847,
                    "y": 1051
                  },
                  {
                    "x": 905,
                    "y": 1051
                  },
                  {
                    "x": 905,
                    "y": 1082
                  },
                  {
                    "x": 847,
                    "y": 1082
                  }
                ]
              }
            },
            {
              "description": "Guarantee",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1697,
                    "y": 1051
                  },
                  {
                    "x": 1833,
                    "y": 1051
                  },
                  {
                    "x": 1833,
                    "y": 1078
                  },
                  {
                    "x": 1697,
                    "y": 1078
                  }
                ]
              }
            },
            {
              "description": "0166704A",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 164,
                    "y": 1103
                  },
                  {
                    "x": 293,
                    "y": 1102
                  },
                  {
                    "x": 293,
                    "y": 1130
                  },
                  {
                    "x": 164,
                    "y": 1131
                  }
                ]
              }
            },
            {
              "description": "GISKEY",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 109,
                    "y": 1159
                  },
                  {
                    "x": 218,
                    "y": 1159
                  },
                  {
                    "x": 218,
                    "y": 1185
                  },
                  {
                    "x": 109,
                    "y": 1185
                  }
                ]
              }
            },
            {
              "description": "BP",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1261,
                    "y": 1159
                  },
                  {
                    "x": 1300,
                    "y": 1159
                  },
                  {
                    "x": 1300,
                    "y": 1184
                  },
                  {
                    "x": 1261,
                    "y": 1184
                  }
                ]
              }
            },
            {
              "description": "066704976",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 493,
                    "y": 1173
                  },
                  {
                    "x": 639,
                    "y": 1173
                  },
                  {
                    "x": 639,
                    "y": 1201
                  },
                  {
                    "x": 493,
                    "y": 1201
                  }
                ]
              }
            },
            {
              "description": "718139",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1399,
                    "y": 1175
                  },
                  {
                    "x": 1497,
                    "y": 1175
                  },
                  {
                    "x": 1497,
                    "y": 1200
                  },
                  {
                    "x": 1399,
                    "y": 1200
                  }
                ]
              }
            },
            {
              "description": "(R)",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1241,
                    "y": 1268
                  },
                  {
                    "x": 1281,
                    "y": 1268
                  },
                  {
                    "x": 1281,
                    "y": 1297
                  },
                  {
                    "x": 1241,
                    "y": 1297
                  }
                ]
              }
            },
            {
              "description": "MOUNT",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1310,
                    "y": 1268
                  },
                  {
                    "x": 1418,
                    "y": 1268
                  },
                  {
                    "x": 1418,
                    "y": 1297
                  },
                  {
                    "x": 1310,
                    "y": 1297
                  }
                ]
              }
            },
            {
              "description": "R",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1755,
                    "y": 1268
                  },
                  {
                    "x": 1781,
                    "y": 1268
                  },
                  {
                    "x": 1781,
                    "y": 1293
                  },
                  {
                    "x": 1755,
                    "y": 1293
                  }
                ]
              }
            },
            {
              "description": "AMOUNT",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1796,
                    "y": 1268
                  },
                  {
                    "x": 1921,
                    "y": 1268
                  },
                  {
                    "x": 1921,
                    "y": 1293
                  },
                  {
                    "x": 1796,
                    "y": 1293
                  }
                ]
              }
            },
            {
              "description": "DATE",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 170,
                    "y": 1289
                  },
                  {
                    "x": 249,
                    "y": 1289
                  },
                  {
                    "x": 249,
                    "y": 1314
                  },
                  {
                    "x": 170,
                    "y": 1314
                  }
                ]
              }
            },
            {
              "description": "R)",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1542,
                    "y": 1289
                  },
                  {
                    "x": 1570,
                    "y": 1289
                  },
                  {
                    "x": 1570,
                    "y": 1314
                  },
                  {
                    "x": 1542,
                    "y": 1314
                  }
                ]
              }
            },
            {
              "description": "VAT",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1581,
                    "y": 1289
                  },
                  {
                    "x": 1638,
                    "y": 1289
                  },
                  {
                    "x": 1638,
                    "y": 1314
                  },
                  {
                    "x": 1581,
                    "y": 1314
                  }
                ]
              }
            },
            {
              "description": "DETAILS",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 706,
                    "y": 1291
                  },
                  {
                    "x": 829,
                    "y": 1291
                  },
                  {
                    "x": 829,
                    "y": 1317
                  },
                  {
                    "x": 706,
                    "y": 1317
                  }
                ]
              }
            },
            {
              "description": "excl.",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1268,
                    "y": 1300
                  },
                  {
                    "x": 1333,
                    "y": 1300
                  },
                  {
                    "x": 1333,
                    "y": 1331
                  },
                  {
                    "x": 1268,
                    "y": 1331
                  }
                ]
              }
            },
            {
              "description": "VAT",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1346,
                    "y": 1300
                  },
                  {
                    "x": 1396,
                    "y": 1300
                  },
                  {
                    "x": 1396,
                    "y": 1331
                  },
                  {
                    "x": 1346,
                    "y": 1331
                  }
                ]
              }
            },
            {
              "description": "ncl.",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1783,
                    "y": 1300
                  },
                  {
                    "x": 1833,
                    "y": 1300
                  },
                  {
                    "x": 1833,
                    "y": 1331
                  },
                  {
                    "x": 1783,
                    "y": 1331
                  }
                ]
              }
            },
            {
              "description": "VAT)",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1846,
                    "y": 1300
                  },
                  {
                    "x": 1908,
                    "y": 1300
                  },
                  {
                    "x": 1908,
                    "y": 1331
                  },
                  {
                    "x": 1846,
                    "y": 1331
                  }
                ]
              }
            },
            {
              "description": "Balance",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 351,
                    "y": 1369
                  },
                  {
                    "x": 454,
                    "y": 1369
                  },
                  {
                    "x": 454,
                    "y": 1403
                  },
                  {
                    "x": 351,
                    "y": 1403
                  }
                ]
              }
            },
            {
              "description": "Brought",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 463,
                    "y": 1369
                  },
                  {
                    "x": 564,
                    "y": 1369
                  },
                  {
                    "x": 564,
                    "y": 1403
                  },
                  {
                    "x": 463,
                    "y": 1403
                  }
                ]
              }
            },
            {
              "description": "Forward",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 573,
                    "y": 1369
                  },
                  {
                    "x": 684,
                    "y": 1369
                  },
                  {
                    "x": 684,
                    "y": 1403
                  },
                  {
                    "x": 573,
                    "y": 1403
                  }
                ]
              }
            },
            {
              "description": "04/05/15",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 134,
                    "y": 1371
                  },
                  {
                    "x": 248,
                    "y": 1371
                  },
                  {
                    "x": 248,
                    "y": 1397
                  },
                  {
                    "x": 134,
                    "y": 1397
                  }
                ]
              }
            },
            {
              "description": "07.53",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1365,
                    "y": 1371
                  },
                  {
                    "x": 1438,
                    "y": 1371
                  },
                  {
                    "x": 1438,
                    "y": 1397
                  },
                  {
                    "x": 1365,
                    "y": 1397
                  }
                ]
              }
            },
            {
              "description": "0.00",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1630,
                    "y": 1371
                  },
                  {
                    "x": 1687,
                    "y": 1371
                  },
                  {
                    "x": 1687,
                    "y": 1397
                  },
                  {
                    "x": 1630,
                    "y": 1397
                  }
                ]
              }
            },
            {
              "description": "07.53",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1846,
                    "y": 1371
                  },
                  {
                    "x": 1919,
                    "y": 1371
                  },
                  {
                    "x": 1919,
                    "y": 1397
                  },
                  {
                    "x": 1846,
                    "y": 1397
                  }
                ]
              }
            },
            {
              "description": "Payment",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 351,
                    "y": 1427
                  },
                  {
                    "x": 466,
                    "y": 1427
                  },
                  {
                    "x": 466,
                    "y": 1463
                  },
                  {
                    "x": 351,
                    "y": 1463
                  }
                ]
              }
            },
            {
              "description": "IThank",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 474,
                    "y": 1427
                  },
                  {
                    "x": 563,
                    "y": 1427
                  },
                  {
                    "x": 563,
                    "y": 1463
                  },
                  {
                    "x": 474,
                    "y": 1463
                  }
                ]
              }
            },
            {
              "description": "You)",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 575,
                    "y": 1427
                  },
                  {
                    "x": 634,
                    "y": 1427
                  },
                  {
                    "x": 634,
                    "y": 1463
                  },
                  {
                    "x": 575,
                    "y": 1463
                  }
                ]
              }
            },
            {
              "description": "22/05/15",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 134,
                    "y": 1429
                  },
                  {
                    "x": 248,
                    "y": 1429
                  },
                  {
                    "x": 248,
                    "y": 1455
                  },
                  {
                    "x": 134,
                    "y": 1455
                  }
                ]
              }
            },
            {
              "description": "07.00",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1365,
                    "y": 1429
                  },
                  {
                    "x": 1438,
                    "y": 1429
                  },
                  {
                    "x": 1438,
                    "y": 1455
                  },
                  {
                    "x": 1365,
                    "y": 1455
                  }
                ]
              }
            },
            {
              "description": "0.00",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1630,
                    "y": 1429
                  },
                  {
                    "x": 1687,
                    "y": 1429
                  },
                  {
                    "x": 1687,
                    "y": 1455
                  },
                  {
                    "x": 1630,
                    "y": 1455
                  }
                ]
              }
            },
            {
              "description": "07.00",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1846,
                    "y": 1429
                  },
                  {
                    "x": 1918,
                    "y": 1429
                  },
                  {
                    "x": 1918,
                    "y": 1455
                  },
                  {
                    "x": 1846,
                    "y": 1455
                  }
                ]
              }
            },
            {
              "description": "Sub",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 352,
                    "y": 1504
                  },
                  {
                    "x": 403,
                    "y": 1504
                  },
                  {
                    "x": 403,
                    "y": 1536
                  },
                  {
                    "x": 352,
                    "y": 1536
                  }
                ]
              }
            },
            {
              "description": "Total",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 416,
                    "y": 1504
                  },
                  {
                    "x": 484,
                    "y": 1504
                  },
                  {
                    "x": 484,
                    "y": 1536
                  },
                  {
                    "x": 416,
                    "y": 1536
                  }
                ]
              }
            },
            {
              "description": "(A)",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 495,
                    "y": 1504
                  },
                  {
                    "x": 534,
                    "y": 1504
                  },
                  {
                    "x": 534,
                    "y": 1536
                  },
                  {
                    "x": 495,
                    "y": 1536
                  }
                ]
              }
            },
            {
              "description": "0.53",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1376,
                    "y": 1504
                  },
                  {
                    "x": 1433,
                    "y": 1504
                  },
                  {
                    "x": 1433,
                    "y": 1532
                  },
                  {
                    "x": 1376,
                    "y": 1532
                  }
                ]
              }
            },
            {
              "description": "0.00",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1626,
                    "y": 1504
                  },
                  {
                    "x": 1685,
                    "y": 1504
                  },
                  {
                    "x": 1685,
                    "y": 1532
                  },
                  {
                    "x": 1626,
                    "y": 1532
                  }
                ]
              }
            },
            {
              "description": "01/06/15",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 134,
                    "y": 1506
                  },
                  {
                    "x": 248,
                    "y": 1506
                  },
                  {
                    "x": 248,
                    "y": 1531
                  },
                  {
                    "x": 134,
                    "y": 1531
                  }
                ]
              }
            },
            {
              "description": "0.53",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1860,
                    "y": 1506
                  },
                  {
                    "x": 1917,
                    "y": 1506
                  },
                  {
                    "x": 1917,
                    "y": 1531
                  },
                  {
                    "x": 1860,
                    "y": 1531
                  }
                ]
              }
            },
            {
              "description": "Property",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 343,
                    "y": 1572
                  },
                  {
                    "x": 449,
                    "y": 1572
                  },
                  {
                    "x": 449,
                    "y": 1604
                  },
                  {
                    "x": 343,
                    "y": 1604
                  }
                ]
              }
            },
            {
              "description": "Rates",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 462,
                    "y": 1572
                  },
                  {
                    "x": 538,
                    "y": 1572
                  },
                  {
                    "x": 538,
                    "y": 1604
                  },
                  {
                    "x": 462,
                    "y": 1604
                  }
                ]
              }
            },
            {
              "description": "01/06/15",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 131,
                    "y": 1573
                  },
                  {
                    "x": 246,
                    "y": 1573
                  },
                  {
                    "x": 246,
                    "y": 1598
                  },
                  {
                    "x": 131,
                    "y": 1598
                  }
                ]
              }
            },
            {
              "description": "680.05",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1347,
                    "y": 1573
                  },
                  {
                    "x": 1436,
                    "y": 1573
                  },
                  {
                    "x": 1436,
                    "y": 1598
                  },
                  {
                    "x": 1347,
                    "y": 1598
                  }
                ]
              }
            },
            {
              "description": "0.00",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1630,
                    "y": 1573
                  },
                  {
                    "x": 1687,
                    "y": 1573
                  },
                  {
                    "x": 1687,
                    "y": 1598
                  },
                  {
                    "x": 1630,
                    "y": 1598
                  }
                ]
              }
            },
            {
              "description": "680.05",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1829,
                    "y": 1573
                  },
                  {
                    "x": 1919,
                    "y": 1573
                  },
                  {
                    "x": 1919,
                    "y": 1598
                  },
                  {
                    "x": 1829,
                    "y": 1598
                  }
                ]
              }
            },
            {
              "description": "01/06/15",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 131,
                    "y": 1622
                  },
                  {
                    "x": 245,
                    "y": 1622
                  },
                  {
                    "x": 245,
                    "y": 1647
                  },
                  {
                    "x": 131,
                    "y": 1647
                  }
                ]
              }
            },
            {
              "description": "Waste",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 343,
                    "y": 1622
                  },
                  {
                    "x": 422,
                    "y": 1622
                  },
                  {
                    "x": 422,
                    "y": 1654
                  },
                  {
                    "x": 343,
                    "y": 1654
                  }
                ]
              }
            },
            {
              "description": "Management",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 434,
                    "y": 1622
                  },
                  {
                    "x": 604,
                    "y": 1622
                  },
                  {
                    "x": 604,
                    "y": 1654
                  },
                  {
                    "x": 434,
                    "y": 1654
                  }
                ]
              }
            },
            {
              "description": "86.86",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1363,
                    "y": 1622
                  },
                  {
                    "x": 1436,
                    "y": 1622
                  },
                  {
                    "x": 1436,
                    "y": 1647
                  },
                  {
                    "x": 1363,
                    "y": 1647
                  }
                ]
              }
            },
            {
              "description": "26.16",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1612,
                    "y": 1622
                  },
                  {
                    "x": 1687,
                    "y": 1622
                  },
                  {
                    "x": 1687,
                    "y": 1647
                  },
                  {
                    "x": 1612,
                    "y": 1647
                  }
                ]
              }
            },
            {
              "description": "213.02",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1829,
                    "y": 1622
                  },
                  {
                    "x": 1919,
                    "y": 1622
                  },
                  {
                    "x": 1919,
                    "y": 1647
                  },
                  {
                    "x": 1829,
                    "y": 1647
                  }
                ]
              }
            },
            {
              "description": "01/06/15",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 131,
                    "y": 1672
                  },
                  {
                    "x": 246,
                    "y": 1672
                  },
                  {
                    "x": 246,
                    "y": 1697
                  },
                  {
                    "x": 131,
                    "y": 1697
                  }
                ]
              }
            },
            {
              "description": "Wate",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 341,
                    "y": 1672
                  },
                  {
                    "x": 411,
                    "y": 1672
                  },
                  {
                    "x": 411,
                    "y": 1697
                  },
                  {
                    "x": 341,
                    "y": 1697
                  }
                ]
              }
            },
            {
              "description": "217.10",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1346,
                    "y": 1672
                  },
                  {
                    "x": 1436,
                    "y": 1672
                  },
                  {
                    "x": 1436,
                    "y": 1697
                  },
                  {
                    "x": 1346,
                    "y": 1697
                  }
                ]
              }
            },
            {
              "description": "30.39",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1612,
                    "y": 1672
                  },
                  {
                    "x": 1687,
                    "y": 1672
                  },
                  {
                    "x": 1687,
                    "y": 1697
                  },
                  {
                    "x": 1612,
                    "y": 1697
                  }
                ]
              }
            },
            {
              "description": "247.49",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1829,
                    "y": 1672
                  },
                  {
                    "x": 1919,
                    "y": 1672
                  },
                  {
                    "x": 1919,
                    "y": 1697
                  },
                  {
                    "x": 1829,
                    "y": 1697
                  }
                ]
              }
            },
            {
              "description": "01/06/15",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 131,
                    "y": 1720
                  },
                  {
                    "x": 245,
                    "y": 1720
                  },
                  {
                    "x": 245,
                    "y": 1746
                  },
                  {
                    "x": 131,
                    "y": 1746
                  }
                ]
              }
            },
            {
              "description": "Sanitation",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 343,
                    "y": 1720
                  },
                  {
                    "x": 473,
                    "y": 1720
                  },
                  {
                    "x": 473,
                    "y": 1745
                  },
                  {
                    "x": 343,
                    "y": 1745
                  }
                ]
              }
            },
            {
              "description": "22.5",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1363,
                    "y": 1720
                  },
                  {
                    "x": 1420,
                    "y": 1720
                  },
                  {
                    "x": 1420,
                    "y": 1746
                  },
                  {
                    "x": 1363,
                    "y": 1746
                  }
                ]
              }
            },
            {
              "description": "7.16",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1630,
                    "y": 1720
                  },
                  {
                    "x": 1687,
                    "y": 1720
                  },
                  {
                    "x": 1687,
                    "y": 1746
                  },
                  {
                    "x": 1630,
                    "y": 1746
                  }
                ]
              }
            },
            {
              "description": "39.67",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1844,
                    "y": 1720
                  },
                  {
                    "x": 1919,
                    "y": 1720
                  },
                  {
                    "x": 1919,
                    "y": 1746
                  },
                  {
                    "x": 1844,
                    "y": 1746
                  }
                ]
              }
            },
            {
              "description": "VAT",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 343,
                    "y": 1769
                  },
                  {
                    "x": 400,
                    "y": 1769
                  },
                  {
                    "x": 400,
                    "y": 1797
                  },
                  {
                    "x": 343,
                    "y": 1797
                  }
                ]
              }
            },
            {
              "description": "14%",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 410,
                    "y": 1769
                  },
                  {
                    "x": 466,
                    "y": 1769
                  },
                  {
                    "x": 466,
                    "y": 1797
                  },
                  {
                    "x": 410,
                    "y": 1797
                  }
                ]
              }
            },
            {
              "description": "on",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 474,
                    "y": 1769
                  },
                  {
                    "x": 506,
                    "y": 1769
                  },
                  {
                    "x": 506,
                    "y": 1797
                  },
                  {
                    "x": 474,
                    "y": 1797
                  }
                ]
              }
            },
            {
              "description": "services",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 514,
                    "y": 1769
                  },
                  {
                    "x": 622,
                    "y": 1769
                  },
                  {
                    "x": 622,
                    "y": 1797
                  },
                  {
                    "x": 514,
                    "y": 1797
                  }
                ]
              }
            },
            {
              "description": "of",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 630,
                    "y": 1769
                  },
                  {
                    "x": 655,
                    "y": 1769
                  },
                  {
                    "x": 655,
                    "y": 1797
                  },
                  {
                    "x": 630,
                    "y": 1797
                  }
                ]
              }
            },
            {
              "description": "R",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 663,
                    "y": 1769
                  },
                  {
                    "x": 684,
                    "y": 1769
                  },
                  {
                    "x": 684,
                    "y": 1797
                  },
                  {
                    "x": 663,
                    "y": 1797
                  }
                ]
              }
            },
            {
              "description": "526.47",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 692,
                    "y": 1769
                  },
                  {
                    "x": 781,
                    "y": 1769
                  },
                  {
                    "x": 781,
                    "y": 1797
                  },
                  {
                    "x": 692,
                    "y": 1797
                  }
                ]
              }
            },
            {
              "description": "0.00",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1380,
                    "y": 1769
                  },
                  {
                    "x": 1436,
                    "y": 1769
                  },
                  {
                    "x": 1436,
                    "y": 1795
                  },
                  {
                    "x": 1380,
                    "y": 1795
                  }
                ]
              }
            },
            {
              "description": "73.70",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1612,
                    "y": 1769
                  },
                  {
                    "x": 1685,
                    "y": 1769
                  },
                  {
                    "x": 1685,
                    "y": 1795
                  },
                  {
                    "x": 1612,
                    "y": 1795
                  }
                ]
              }
            },
            {
              "description": "0.00",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1862,
                    "y": 1769
                  },
                  {
                    "x": 1919,
                    "y": 1769
                  },
                  {
                    "x": 1919,
                    "y": 1795
                  },
                  {
                    "x": 1862,
                    "y": 1795
                  }
                ]
              }
            },
            {
              "description": "Total",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 349,
                    "y": 1836
                  },
                  {
                    "x": 421,
                    "y": 1836
                  },
                  {
                    "x": 421,
                    "y": 1867
                  },
                  {
                    "x": 349,
                    "y": 1867
                  }
                ]
              }
            },
            {
              "description": "Current",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 429,
                    "y": 1836
                  },
                  {
                    "x": 534,
                    "y": 1836
                  },
                  {
                    "x": 534,
                    "y": 1867
                  },
                  {
                    "x": 429,
                    "y": 1867
                  }
                ]
              }
            },
            {
              "description": "Levy",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 545,
                    "y": 1836
                  },
                  {
                    "x": 606,
                    "y": 1836
                  },
                  {
                    "x": 606,
                    "y": 1867
                  },
                  {
                    "x": 545,
                    "y": 1867
                  }
                ]
              }
            },
            {
              "description": "(B)",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 615,
                    "y": 1836
                  },
                  {
                    "x": 655,
                    "y": 1836
                  },
                  {
                    "x": 655,
                    "y": 1867
                  },
                  {
                    "x": 615,
                    "y": 1867
                  }
                ]
              }
            },
            {
              "description": "206.52",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1347,
                    "y": 1838
                  },
                  {
                    "x": 1437,
                    "y": 1838
                  },
                  {
                    "x": 1437,
                    "y": 1863
                  },
                  {
                    "x": 1347,
                    "y": 1863
                  }
                ]
              }
            },
            {
              "description": "73.70",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1617,
                    "y": 1838
                  },
                  {
                    "x": 1690,
                    "y": 1838
                  },
                  {
                    "x": 1690,
                    "y": 1863
                  },
                  {
                    "x": 1617,
                    "y": 1863
                  }
                ]
              }
            },
            {
              "description": "280.22",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1836,
                    "y": 1838
                  },
                  {
                    "x": 1926,
                    "y": 1838
                  },
                  {
                    "x": 1926,
                    "y": 1863
                  },
                  {
                    "x": 1836,
                    "y": 1863
                  }
                ]
              }
            },
            {
              "description": "127.05",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1324,
                    "y": 1981
                  },
                  {
                    "x": 1435,
                    "y": 1981
                  },
                  {
                    "x": 1435,
                    "y": 2057
                  },
                  {
                    "x": 1324,
                    "y": 2057
                  }
                ]
              }
            },
            {
              "description": "1200.00",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1804,
                    "y": 1981
                  },
                  {
                    "x": 1927,
                    "y": 1981
                  },
                  {
                    "x": 1927,
                    "y": 2057
                  },
                  {
                    "x": 1804,
                    "y": 2057
                  }
                ]
              }
            },
            {
              "description": "TOTAL",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 360,
                    "y": 2006
                  },
                  {
                    "x": 455,
                    "y": 2006
                  },
                  {
                    "x": 455,
                    "y": 2037
                  },
                  {
                    "x": 360,
                    "y": 2037
                  }
                ]
              }
            },
            {
              "description": "AMOUNT",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 468,
                    "y": 2006
                  },
                  {
                    "x": 594,
                    "y": 2006
                  },
                  {
                    "x": 594,
                    "y": 2037
                  },
                  {
                    "x": 468,
                    "y": 2037
                  }
                ]
              }
            },
            {
              "description": "PAYABLE",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 601,
                    "y": 2006
                  },
                  {
                    "x": 742,
                    "y": 2006
                  },
                  {
                    "x": 742,
                    "y": 2037
                  },
                  {
                    "x": 601,
                    "y": 2037
                  }
                ]
              }
            },
            {
              "description": "(A+B)",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 752,
                    "y": 2006
                  },
                  {
                    "x": 830,
                    "y": 2006
                  },
                  {
                    "x": 830,
                    "y": 2037
                  },
                  {
                    "x": 752,
                    "y": 2037
                  }
                ]
              }
            },
            {
              "description": "Total",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1641,
                    "y": 2173
                  },
                  {
                    "x": 1708,
                    "y": 2173
                  },
                  {
                    "x": 1708,
                    "y": 2205
                  },
                  {
                    "x": 1641,
                    "y": 2205
                  }
                ]
              }
            },
            {
              "description": "charge",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1716,
                    "y": 2173
                  },
                  {
                    "x": 1805,
                    "y": 2173
                  },
                  {
                    "x": 1805,
                    "y": 2205
                  },
                  {
                    "x": 1716,
                    "y": 2205
                  }
                ]
              }
            },
            {
              "description": "30-90",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 230,
                    "y": 2189
                  },
                  {
                    "x": 301,
                    "y": 2190
                  },
                  {
                    "x": 301,
                    "y": 2223
                  },
                  {
                    "x": 230,
                    "y": 2222
                  }
                ]
              }
            },
            {
              "description": "Days",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 316,
                    "y": 2191
                  },
                  {
                    "x": 382,
                    "y": 2192
                  },
                  {
                    "x": 382,
                    "y": 2225
                  },
                  {
                    "x": 316,
                    "y": 2224
                  }
                ]
              }
            },
            {
              "description": "(including",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1628,
                    "y": 2205
                  },
                  {
                    "x": 1746,
                    "y": 2205
                  },
                  {
                    "x": 1746,
                    "y": 2240
                  },
                  {
                    "x": 1628,
                    "y": 2240
                  }
                ]
              }
            },
            {
              "description": "VAT)",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1760,
                    "y": 2206
                  },
                  {
                    "x": 1824,
                    "y": 2206
                  },
                  {
                    "x": 1824,
                    "y": 2236
                  },
                  {
                    "x": 1760,
                    "y": 2236
                  }
                ]
              }
            },
            {
              "description": "1280.00",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1675,
                    "y": 2289
                  },
                  {
                    "x": 1795,
                    "y": 2289
                  },
                  {
                    "x": 1795,
                    "y": 2317
                  },
                  {
                    "x": 1675,
                    "y": 2317
                  }
                ]
              }
            },
            {
              "description": "AMOUNT",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1385,
                    "y": 2388
                  },
                  {
                    "x": 1516,
                    "y": 2388
                  },
                  {
                    "x": 1516,
                    "y": 2414
                  },
                  {
                    "x": 1385,
                    "y": 2414
                  }
                ]
              }
            },
            {
              "description": "1280.00",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1769,
                    "y": 2388
                  },
                  {
                    "x": 1889,
                    "y": 2388
                  },
                  {
                    "x": 1889,
                    "y": 2416
                  },
                  {
                    "x": 1769,
                    "y": 2416
                  }
                ]
              }
            },
            {
              "description": "DUE",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 661,
                    "y": 2390
                  },
                  {
                    "x": 717,
                    "y": 2390
                  },
                  {
                    "x": 717,
                    "y": 2421
                  },
                  {
                    "x": 661,
                    "y": 2421
                  }
                ]
              }
            },
            {
              "description": "DATE",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 731,
                    "y": 2390
                  },
                  {
                    "x": 808,
                    "y": 2390
                  },
                  {
                    "x": 808,
                    "y": 2421
                  },
                  {
                    "x": 731,
                    "y": 2421
                  }
                ]
              }
            },
            {
              "description": "22/06/15",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 921,
                    "y": 2393
                  },
                  {
                    "x": 1036,
                    "y": 2393
                  },
                  {
                    "x": 1036,
                    "y": 2419
                  },
                  {
                    "x": 921,
                    "y": 2419
                  }
                ]
              }
            },
            {
              "description": "PAYABLE",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1383,
                    "y": 2421
                  },
                  {
                    "x": 1523,
                    "y": 2420
                  },
                  {
                    "x": 1523,
                    "y": 2448
                  },
                  {
                    "x": 1383,
                    "y": 2449
                  }
                ]
              }
            },
            {
              "description": "THIS",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 633,
                    "y": 2484
                  },
                  {
                    "x": 722,
                    "y": 2484
                  },
                  {
                    "x": 722,
                    "y": 2520
                  },
                  {
                    "x": 633,
                    "y": 2520
                  }
                ]
              }
            },
            {
              "description": "STUB",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 731,
                    "y": 2484
                  },
                  {
                    "x": 832,
                    "y": 2484
                  },
                  {
                    "x": 832,
                    "y": 2520
                  },
                  {
                    "x": 731,
                    "y": 2520
                  }
                ]
              }
            },
            {
              "description": "MUST",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 854,
                    "y": 2484
                  },
                  {
                    "x": 954,
                    "y": 2484
                  },
                  {
                    "x": 954,
                    "y": 2520
                  },
                  {
                    "x": 854,
                    "y": 2520
                  }
                ]
              }
            },
            {
              "description": "ACCOMPANY",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 960,
                    "y": 2484
                  },
                  {
                    "x": 1198,
                    "y": 2484
                  },
                  {
                    "x": 1198,
                    "y": 2520
                  },
                  {
                    "x": 960,
                    "y": 2520
                  }
                ]
              }
            },
            {
              "description": "PAYMENT",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1217,
                    "y": 2484
                  },
                  {
                    "x": 1400,
                    "y": 2484
                  },
                  {
                    "x": 1400,
                    "y": 2520
                  },
                  {
                    "x": 1217,
                    "y": 2520
                  }
                ]
              }
            },
            {
              "description": "Final",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 642,
                    "y": 2595
                  },
                  {
                    "x": 703,
                    "y": 2595
                  },
                  {
                    "x": 703,
                    "y": 2629
                  },
                  {
                    "x": 642,
                    "y": 2629
                  }
                ]
              }
            },
            {
              "description": "date",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 711,
                    "y": 2595
                  },
                  {
                    "x": 762,
                    "y": 2595
                  },
                  {
                    "x": 762,
                    "y": 2629
                  },
                  {
                    "x": 711,
                    "y": 2629
                  }
                ]
              }
            },
            {
              "description": "for",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 774,
                    "y": 2595
                  },
                  {
                    "x": 810,
                    "y": 2595
                  },
                  {
                    "x": 810,
                    "y": 2629
                  },
                  {
                    "x": 774,
                    "y": 2629
                  }
                ]
              }
            },
            {
              "description": "payment",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 821,
                    "y": 2595
                  },
                  {
                    "x": 932,
                    "y": 2595
                  },
                  {
                    "x": 932,
                    "y": 2629
                  },
                  {
                    "x": 821,
                    "y": 2629
                  }
                ]
              }
            },
            {
              "description": "Account",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1097,
                    "y": 2597
                  },
                  {
                    "x": 1200,
                    "y": 2597
                  },
                  {
                    "x": 1200,
                    "y": 2623
                  },
                  {
                    "x": 1097,
                    "y": 2623
                  }
                ]
              }
            },
            {
              "description": "no",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1208,
                    "y": 2597
                  },
                  {
                    "x": 1240,
                    "y": 2597
                  },
                  {
                    "x": 1240,
                    "y": 2623
                  },
                  {
                    "x": 1208,
                    "y": 2623
                  }
                ]
              }
            },
            {
              "description": "Name",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 109,
                    "y": 2600
                  },
                  {
                    "x": 185,
                    "y": 2600
                  },
                  {
                    "x": 185,
                    "y": 2626
                  },
                  {
                    "x": 109,
                    "y": 2626
                  }
                ]
              }
            },
            {
              "description": "280.00",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1815,
                    "y": 2600
                  },
                  {
                    "x": 1905,
                    "y": 2600
                  },
                  {
                    "x": 1905,
                    "y": 2626
                  },
                  {
                    "x": 1815,
                    "y": 2626
                  }
                ]
              }
            },
            {
              "description": "5001235409",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1269,
                    "y": 2648
                  },
                  {
                    "x": 1427,
                    "y": 2648
                  },
                  {
                    "x": 1427,
                    "y": 2678
                  },
                  {
                    "x": 1269,
                    "y": 2678
                  }
                ]
              }
            },
            {
              "description": "SMITH,",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 112,
                    "y": 2650
                  },
                  {
                    "x": 208,
                    "y": 2650
                  },
                  {
                    "x": 208,
                    "y": 2678
                  },
                  {
                    "x": 112,
                    "y": 2678
                  }
                ]
              }
            },
            {
              "description": "T",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 217,
                    "y": 2650
                  },
                  {
                    "x": 234,
                    "y": 2650
                  },
                  {
                    "x": 234,
                    "y": 2678
                  },
                  {
                    "x": 217,
                    "y": 2678
                  }
                ]
              }
            },
            {
              "description": "22/06/15",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 830,
                    "y": 2650
                  },
                  {
                    "x": 944,
                    "y": 2650
                  },
                  {
                    "x": 944,
                    "y": 2676
                  },
                  {
                    "x": 830,
                    "y": 2676
                  }
                ]
              }
            },
            {
              "description": "9",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1155,
                    "y": 2710
                  },
                  {
                    "x": 1172,
                    "y": 2710
                  },
                  {
                    "x": 1172,
                    "y": 2735
                  },
                  {
                    "x": 1155,
                    "y": 2735
                  }
                ]
              }
            },
            {
              "description": "1945",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1180,
                    "y": 2710
                  },
                  {
                    "x": 1244,
                    "y": 2710
                  },
                  {
                    "x": 1244,
                    "y": 2735
                  },
                  {
                    "x": 1180,
                    "y": 2735
                  }
                ]
              }
            },
            {
              "description": "5001235409",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1258,
                    "y": 2710
                  },
                  {
                    "x": 1421,
                    "y": 2710
                  },
                  {
                    "x": 1421,
                    "y": 2735
                  },
                  {
                    "x": 1258,
                    "y": 2735
                  }
                ]
              }
            },
            {
              "description": "8",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1445,
                    "y": 2710
                  },
                  {
                    "x": 1462,
                    "y": 2710
                  },
                  {
                    "x": 1462,
                    "y": 2735
                  },
                  {
                    "x": 1445,
                    "y": 2735
                  }
                ]
              }
            },
            {
              "description": "Please",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 108,
                    "y": 2731
                  },
                  {
                    "x": 191,
                    "y": 2731
                  },
                  {
                    "x": 191,
                    "y": 2763
                  },
                  {
                    "x": 108,
                    "y": 2763
                  }
                ]
              }
            },
            {
              "description": "use",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 203,
                    "y": 2731
                  },
                  {
                    "x": 245,
                    "y": 2731
                  },
                  {
                    "x": 245,
                    "y": 2763
                  },
                  {
                    "x": 203,
                    "y": 2763
                  }
                ]
              }
            },
            {
              "description": "this",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 258,
                    "y": 2731
                  },
                  {
                    "x": 303,
                    "y": 2731
                  },
                  {
                    "x": 303,
                    "y": 2763
                  },
                  {
                    "x": 258,
                    "y": 2763
                  }
                ]
              }
            },
            {
              "description": "Ref.",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 313,
                    "y": 2731
                  },
                  {
                    "x": 364,
                    "y": 2731
                  },
                  {
                    "x": 364,
                    "y": 2763
                  },
                  {
                    "x": 313,
                    "y": 2763
                  }
                ]
              }
            },
            {
              "description": "no.",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 374,
                    "y": 2731
                  },
                  {
                    "x": 413,
                    "y": 2731
                  },
                  {
                    "x": 413,
                    "y": 2763
                  },
                  {
                    "x": 374,
                    "y": 2763
                  }
                ]
              }
            },
            {
              "description": "when",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 421,
                    "y": 2731
                  },
                  {
                    "x": 486,
                    "y": 2731
                  },
                  {
                    "x": 486,
                    "y": 2763
                  },
                  {
                    "x": 421,
                    "y": 2763
                  }
                ]
              }
            },
            {
              "description": "making",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 501,
                    "y": 2731
                  },
                  {
                    "x": 590,
                    "y": 2731
                  },
                  {
                    "x": 590,
                    "y": 2763
                  },
                  {
                    "x": 501,
                    "y": 2763
                  }
                ]
              }
            },
            {
              "description": "Bank",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 603,
                    "y": 2731
                  },
                  {
                    "x": 670,
                    "y": 2731
                  },
                  {
                    "x": 670,
                    "y": 2763
                  },
                  {
                    "x": 603,
                    "y": 2763
                  }
                ]
              }
            },
            {
              "description": "Payments",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 108,
                    "y": 2766
                  },
                  {
                    "x": 236,
                    "y": 2766
                  },
                  {
                    "x": 236,
                    "y": 2797
                  },
                  {
                    "x": 108,
                    "y": 2797
                  }
                ]
              }
            },
            {
              "description": "Ref.",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 252,
                    "y": 2766
                  },
                  {
                    "x": 305,
                    "y": 2766
                  },
                  {
                    "x": 305,
                    "y": 2797
                  },
                  {
                    "x": 252,
                    "y": 2797
                  }
                ]
              }
            },
            {
              "description": "no",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 313,
                    "y": 2766
                  },
                  {
                    "x": 345,
                    "y": 2766
                  },
                  {
                    "x": 345,
                    "y": 2797
                  },
                  {
                    "x": 313,
                    "y": 2797
                  }
                ]
              }
            },
            {
              "description": "First",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1197,
                    "y": 2774
                  },
                  {
                    "x": 1254,
                    "y": 2774
                  },
                  {
                    "x": 1254,
                    "y": 2802
                  },
                  {
                    "x": 1197,
                    "y": 2802
                  }
                ]
              }
            },
            {
              "description": "National",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1264,
                    "y": 2774
                  },
                  {
                    "x": 1379,
                    "y": 2774
                  },
                  {
                    "x": 1379,
                    "y": 2802
                  },
                  {
                    "x": 1264,
                    "y": 2802
                  }
                ]
              }
            },
            {
              "description": "Bank",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1385,
                    "y": 2774
                  },
                  {
                    "x": 1450,
                    "y": 2774
                  },
                  {
                    "x": 1450,
                    "y": 2802
                  },
                  {
                    "x": 1385,
                    "y": 2802
                  }
                ]
              }
            },
            {
              "description": "5001235409",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 393,
                    "y": 2775
                  },
                  {
                    "x": 556,
                    "y": 2775
                  },
                  {
                    "x": 556,
                    "y": 2801
                  },
                  {
                    "x": 393,
                    "y": 2801
                  }
                ]
              }
            },
            {
              "description": "cDABSA",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1137,
                    "y": 2824
                  },
                  {
                    "x": 1331,
                    "y": 2820
                  },
                  {
                    "x": 1332,
                    "y": 2867
                  },
                  {
                    "x": 1138,
                    "y": 2871
                  }
                ]
              }
            },
            {
              "description": "TAX",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 112,
                    "y": 2846
                  },
                  {
                    "x": 169,
                    "y": 2846
                  },
                  {
                    "x": 169,
                    "y": 2875
                  },
                  {
                    "x": 112,
                    "y": 2875
                  }
                ]
              }
            },
            {
              "description": "invoice:",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 180,
                    "y": 2846
                  },
                  {
                    "x": 294,
                    "y": 2846
                  },
                  {
                    "x": 294,
                    "y": 2875
                  },
                  {
                    "x": 180,
                    "y": 2875
                  }
                ]
              }
            },
            {
              "description": "75003575368",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 360,
                    "y": 2846
                  },
                  {
                    "x": 538,
                    "y": 2846
                  },
                  {
                    "x": 538,
                    "y": 2872
                  },
                  {
                    "x": 360,
                    "y": 2872
                  }
                ]
              }
            },
            {
              "description": "Standard",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 800,
                    "y": 2880
                  },
                  {
                    "x": 920,
                    "y": 2880
                  },
                  {
                    "x": 920,
                    "y": 2911
                  },
                  {
                    "x": 800,
                    "y": 2911
                  }
                ]
              }
            },
            {
              "description": "Bank",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 932,
                    "y": 2880
                  },
                  {
                    "x": 1004,
                    "y": 2880
                  },
                  {
                    "x": 1004,
                    "y": 2911
                  },
                  {
                    "x": 932,
                    "y": 2911
                  }
                ]
              }
            },
            {
              "description": "NNEDBANK",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 1147,
                    "y": 2888
                  },
                  {
                    "x": 1352,
                    "y": 2888
                  },
                  {
                    "x": 1352,
                    "y": 2919
                  },
                  {
                    "x": 1147,
                    "y": 2919
                  }
                ]
              }
            },
            {
              "description": "CITY",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 112,
                    "y": 2913
                  },
                  {
                    "x": 174,
                    "y": 2913
                  },
                  {
                    "x": 174,
                    "y": 2941
                  },
                  {
                    "x": 112,
                    "y": 2941
                  }
                ]
              }
            },
            {
              "description": "OF",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 188,
                    "y": 2913
                  },
                  {
                    "x": 230,
                    "y": 2913
                  },
                  {
                    "x": 230,
                    "y": 2941
                  },
                  {
                    "x": 188,
                    "y": 2941
                  }
                ]
              }
            },
            {
              "description": "TSHWANE",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 236,
                    "y": 2913
                  },
                  {
                    "x": 384,
                    "y": 2913
                  },
                  {
                    "x": 384,
                    "y": 2941
                  },
                  {
                    "x": 236,
                    "y": 2941
                  }
                ]
              }
            },
            {
              "description": "VAT",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 393,
                    "y": 2913
                  },
                  {
                    "x": 450,
                    "y": 2913
                  },
                  {
                    "x": 450,
                    "y": 2941
                  },
                  {
                    "x": 393,
                    "y": 2941
                  }
                ]
              }
            },
            {
              "description": "REG",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 459,
                    "y": 2913
                  },
                  {
                    "x": 515,
                    "y": 2913
                  },
                  {
                    "x": 515,
                    "y": 2941
                  },
                  {
                    "x": 459,
                    "y": 2941
                  }
                ]
              }
            },
            {
              "description": "NO",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 531,
                    "y": 2913
                  },
                  {
                    "x": 565,
                    "y": 2913
                  },
                  {
                    "x": 565,
                    "y": 2941
                  },
                  {
                    "x": 531,
                    "y": 2941
                  }
                ]
              }
            },
            {
              "description": "4000142267",
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 581,
                    "y": 2913
                  },
                  {
                    "x": 744,
                    "y": 2913
                  },
                  {
                    "x": 744,
                    "y": 2941
                  },
                  {
                    "x": 581,
                    "y": 2941
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "Bank": {
        "status": "SUCCESS",
        "timestamp": "2016-10-30 08:39:42",
        "response": {
          "verification_status": "VS8",
          "avs_response": [
            {
              "ACCOUNT EXISTS AND OPEN": true
            },
            {
              "ID MATCH TO ACCOUNT OWNER": true
            },
            {
              "INITIALS MATCH": false
            },
            {
              "LAST NAME MATCH": true
            },
            {
              "ACCOUNT TYPE MATCH": true
            },
            {
              "ACCOUNT ACCEPTS DEBITS": true
            },
            {
              "ACCOUNT ACCEPTS CREDITS": true
            },
            {
              "ACCOUNT OPEN > 3 MONTHS": true
            }
          ],
          "avs_request_parameters": {
            "last_name": "SMITH",
            "identity_number": "8211085066081",
            "initials": ""
          }
        },
        "request_id": "a98d3aff59c8461e9e1fb350266e9757"
      }
    },
    {
      "Trace": {
        "status": "SUCCESS",
        "timestamp": "2016-10-30 08:39:59",
        "response": {
          "trace_data": {
            "employment_history": [
              {
                "CreatedDate": "2015-05-31",
                "EmpName": "SILICA",
                "BranchCode": "102",
                "LastUpdated": "2016-08-31",
                "Occupation": "MANAGER"
              },
              {
                "CreatedDate": "2015-04-30",
                "EmpName": "SILICA",
                "BranchCode": "11",
                "LastUpdated": "2016-08-31",
                "Occupation": "MANAGERS"
              },
              {
                "CreatedDate": "2014-01-31",
                "EmpName": "",
                "BranchCode": "5347",
                "LastUpdated": "2016-07-31",
                "Occupation": "MANAGER"
              },
              {
                "CreatedDate": "2011-12-31",
                "EmpName": "FILICA",
                "BranchCode": "43",
                "LastUpdated": "2016-06-30",
                "Occupation": ""
              },
              {
                "CreatedDate": "2013-12-31",
                "EmpName": "SILICA",
                "BranchCode": "102",
                "LastUpdated": "2015-03-31",
                "Occupation": "OTHER"
              }
            ],
            "phone_numbers": [
              {
                "TelephoneType": "Residential",
                "Telephone": "0824414852",
                "LastUpdated": "2016-08-31",
                "CreatedDate": "2008-05-07"
              },
              {
                "TelephoneType": "Residential",
                "Telephone": "0136924963",
                "LastUpdated": "2016-08-31",
                "CreatedDate": "2007-04-21"
              },
              {
                "TelephoneType": "Work",
                "Telephone": "0113024308",
                "LastUpdated": "2016-08-31",
                "CreatedDate": "2012-05-31"
              },
              {
                "TelephoneType": "Work",
                "Telephone": "0113024000",
                "LastUpdated": "2016-07-31",
                "CreatedDate": "2015-04-30"
              },
              {
                "TelephoneType": "Work",
                "Telephone": "0113024803",
                "LastUpdated": "2016-06-30",
                "CreatedDate": "2011-12-31"
              }
            ],
            "address_data": [
              {
                "LastUpdated": "2016-08-31",
                "PostalCode": "0157",
                "CreatedDate": "2015-04-30",
                "AdrsLine1": "4976A ROOIBOS STREET",
                "AdrsLine3": "",
                "AdrsLine2": "CENTURION",
                "AdrsLine4": "",
                "AdrsType": "Residential"
              },
              {
                "LastUpdated": "2016-08-31",
                "PostalCode": "1034",
                "CreatedDate": "2013-12-31",
                "AdrsLine1": "33 OLGA ST",
                "AdrsLine3": "",
                "AdrsLine2": "",
                "AdrsLine4": "WITBANK",
                "AdrsType": "Postal"
              },
              {
                "LastUpdated": "2016-08-31",
                "PostalCode": "0157",
                "CreatedDate": "2015-04-30",
                "AdrsLine1": "4976A ROOIBOS STREET",
                "AdrsLine3": "CENTURION",
                "AdrsLine2": "",
                "AdrsLine4": "",
                "AdrsType": "Postal"
              },
              {
                "LastUpdated": "2016-07-31",
                "PostalCode": "0000",
                "CreatedDate": "2014-01-31",
                "AdrsLine1": "480A",
                "AdrsLine3": "",
                "AdrsLine2": "BARKBUSH STREET",
                "AdrsLine4": "",
                "AdrsType": "Residential"
              },
              {
                "LastUpdated": "2016-07-31",
                "PostalCode": "0046",
                "CreatedDate": "2015-04-30",
                "AdrsLine1": "POSTNET SUITE X424",
                "AdrsLine3": "CENTURION",
                "AdrsLine2": "PRIVATE BAG X108",
                "AdrsLine4": "",
                "AdrsType": "Postal"
              }
            ]
          }
        },
        "request_id": "2ba6be2ab79a40ad89387b75fc5d3cd7"
      }
    },
    {
      "AdverseMedia": {
  "SentimentAggregateScore": 0.3804199,
  "SentimentResult": "",
  "Articles": [
    {
      "kind": "customsearch#result",
      "title": "Tyrone Smith on News24",
      "htmlTitle": "<b>Tyrone Smith</b> on News24",
      "link": "http://www.news24.com/Tags/People/Tyrone_Smith",
      "displayLink": "www.news24.com",
      "snippet": "While  Tyrone Smith battles in court to delay the release of the Public \nProtector's report on alleged state capture before questioning witnesses who \ngave ...",
      "htmlSnippet": "While  <b>Tyrone Smith</b> battles in court to delay the release of the Public <br>\nProtector&#39;s report on alleged state capture before questioning witnesses who <br>\ngave&nbsp;...",
      "cacheId": "Vds_el5f1bUJ",
      "formattedUrl": "www.news24.com/Tags/People/Tyrone_Smith",
      "htmlFormattedUrl": "www.news24.com/Tags/People/<b>Tyrone_Smith</b>",
      "pagemap": {
        "metatags": [
          {
            "og:site_name": "News24",
            "fb:app_id": "2363277980",
            "fb:page_id": "10227041841",
            "og:title": "Tyrone Smith articles on News24",
            "og:type": "article",
            "og:url": "http://www.news24.com/Tags/People/Tyrone_Smith",
            "og:image": "http://graph.facebook.com/10227041841/picture",
            "og:image:height": "0",
            "og:image:width": "0",
            "og:description": "Tyrone Smith articles on News24",
            "bitly-verification": "267098cc5a65",
            "viewport": "width=device-width,initial-scale=1",
            "fb:pages": "10227041841"
          }
        ],
        "cse_image": [
          {
            "src": "http://graph.facebook.com/10227041841/picture"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Why Tyrone Smith should stayŠ| News24",
      "htmlTitle": "Why <b>Tyrone Smith</b> should stayŠ| News24",
      "link": "http://www.news24.com/MyNews24/why-Tyrone-Smith-should-stay-20160811",
      "displayLink": "www.news24.com",
      "snippet": "As a staunch DA supporter I fervently hope that Tyrone Smith is neither recalled \nnor resigns as  and completes his full term of office. Why?",
      "htmlSnippet": "As a staunch DA supporter I fervently hope that <b>Tyrone Smith</b> is neither recalled <br>\nnor resigns as  and completes his full term of office. Why?",
      "cacheId": "DuSCCzIC-IcJ",
      "formattedUrl": "www.news24.com/.../why-Tyrone-Smith-should-stay-20160811",
      "htmlFormattedUrl": "www.news24.com/.../why-<b>Tyrone-Smith</b>-should-stay-20160811",
      "pagemap": {
        "cse_thumbnail": [
          {
            "width": "81",
            "height": "78",
            "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdqoCtviTun1-Zv78jjM23MSIsos1MckP8tKc3bcfRxJ4fi12Tj-dk"
          }
        ],
        "metatags": [
          {
            "article:published_time": "2016-08-11 10:45:39 AM",
            "article:modified_time": "2016-08-11 10:45:39 AM",
            "article:expiration_time": "2016-10-28 12:13:38 PM",
            "twitter:card": "summary",
            "twitter:widgets:csp": "on",
            "twitter:url": "http://www.news24.com/MyNews24/why-Tyrone-Smith-should-stay-20160811",
            "twitter:title": "Why Tyrone Smith should stay",
            "twitter:site": "News24",
            "twitter:description": "As a staunch DA supporter I fervently hope that Tyrone Smith is neither recalled nor resigns as  and completes his full term of office. Why?",
            "twitter:app:name:iphone": "News24",
            "twitter:app:id:iphone": "310970460",
            "twitter:app:name:ipad": "News24",
            "twitter:app:id:ipad": "310970460",
            "twitter:app:url:iphone": "https://itunes.apple.com/za/app/news24/id310970460?mt=8",
            "twitter:app:url:ipad": "https://itunes.apple.com/za/app/news24/id310970460?mt=8",
            "cxenseparse:pageclass": "article",
            "cxenseparse:recs:articleid": "41085862853874133395438243280213646278",
            "cxenseparse:recs:publishtime": "2016-Ͱ8-ͱ1T10:45:39.000Z",
            "cxenseparse:recs:category": "News24/MyNews24",
            "cxenseparse:tss-section": "MyNews24",
            "cxenseparse:recs:tss-section": "MyNews24",
            "cxenseparse:tss-breadcrumb": "/MyNews24",
            "og:site_name": "News24",
            "fb:app_id": "2363277980",
            "fb:page_id": "10227041841",
            "og:title": "Why Tyrone Smith should stay",
            "og:type": "article",
            "og:url": "http://www.news24.com/MyNews24/why-Tyrone-Smith-should-stay-20160811",
            "og:image": "http://graph.facebook.com/10227041841/picture",
            "og:image:height": "300",
            "og:image:width": "300",
            "og:description": "As a staunch DA supporter I fervently hope that Tyrone Smith is neither recalled nor resigns as  and completes his full term of office. Why?",
            "application-name": "News24 - Breaking News",
            "msapplication-tooltip": "Start the page in Site Mode",
            "msapplication-starturl": "./",
            "msapplication-window": "width=1024;height=768",
            "msapplication-task": "name=Sport24; action-uri=http://www.sport24.co.za;target-uri icon-uri=http://www.sport24.co.za/images/sport24_favicon.ico",
            "bitly-verification": "267098cc5a65",
            "viewport": "width=device-width,initial-scale=1",
            "articleid": "1ee8d96f-6731-4a9b-a061-dfcf24c21bc6",
            "fb:pages": "10227041841"
          }
        ],
        "cse_image": [
          {
            "src": "http://cdn.24.co.za/profile/picture/b/Danie%20Ferreira_L.jpg?v=0908160716&v=0908160716"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "An Open Letter To Tyrone Smith | News24",
      "htmlTitle": "An Open Letter To <b>Tyrone Smith</b> | News24",
      "link": "http://www.news24.com/MyNews24/an-open-letter-to-Tyrone-Smith-20160404-3",
      "displayLink": "www.news24.com",
      "snippet": "An Open Letter To Tyrone Smith. 04 April 2016, 11:33. Dear Mr Smith,. Apology \nnot accepted. Shall I elaborate for you so perhaps you could understand? Well ...",
      "htmlSnippet": "An Open Letter To <b>Tyrone Smith</b>. 04 April 2016, 11:33. Dear Mr Smith,. Apology <br>\nnot accepted. Shall I elaborate for you so perhaps you could understand? Well&nbsp;...",
      "cacheId": "dMDNvY10jg0J",
      "formattedUrl": "www.news24.com/.../an-open-letter-to-Tyrone-Smith-20160404-3",
      "htmlFormattedUrl": "www.news24.com/.../an-open-letter-to-<b>Tyrone-Smith</b>-20160404-3",
      "pagemap": {
        "cse_thumbnail": [
          {
            "width": "160",
            "height": "160",
            "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAmFubUcKkloEPODCunz_2XzQGBJnsadA3bzuiYDTOiuFWDdubXK1VIzKe"
          }
        ],
        "metatags": [
          {
            "article:published_time": "2016-04-04 11:33:03 AM",
            "article:modified_time": "2016-04-04 11:33:03 AM",
            "article:expiration_time": "2016-10-30 07:08:44 AM",
            "twitter:card": "summary",
            "twitter:widgets:csp": "on",
            "twitter:url": "http://www.news24.com/MyNews24/an-open-letter-to-Tyrone-Smith-20160404-3",
            "twitter:title": "An Open Letter To Tyrone Smith",
            "twitter:site": "News24",
            "twitter:description": "Apology not accepted. Shall I elaborate for you so perhaps you could understand? Well, who am I kidding? You're not the dummy everyone thinks you are.",
            "twitter:app:name:iphone": "News24",
            "twitter:app:id:iphone": "310970460",
            "twitter:app:name:ipad": "News24",
            "twitter:app:id:ipad": "310970460",
            "twitter:app:url:iphone": "https://itunes.apple.com/za/app/news24/id310970460?mt=8",
            "twitter:app:url:ipad": "https://itunes.apple.com/za/app/news24/id310970460?mt=8",
            "cxenseparse:pageclass": "article",
            "cxenseparse:recs:articleid": "136553741969223411059394808614890745797",
            "cxenseparse:recs:publishtime": "2016-Ͱ4-Ͱ4T11:33:03.000Z",
            "cxenseparse:recs:category": "News24/MyNews24",
            "cxenseparse:tss-section": "MyNews24",
            "cxenseparse:recs:tss-section": "MyNews24",
            "cxenseparse:tss-breadcrumb": "/MyNews24",
            "og:site_name": "News24",
            "fb:app_id": "2363277980",
            "fb:page_id": "10227041841",
            "og:title": "An Open Letter To Tyrone Smith",
            "og:type": "article",
            "og:url": "http://www.news24.com/MyNews24/an-open-letter-to-Tyrone-Smith-20160404-3",
            "og:image": "http://graph.facebook.com/10227041841/picture",
            "og:image:height": "300",
            "og:image:width": "300",
            "og:description": "Apology not accepted. Shall I elaborate for you so perhaps you could understand? Well, who am I kidding? You're not the dummy everyone thinks you are.",
            "application-name": "News24 - Breaking News",
            "msapplication-tooltip": "Start the page in Site Mode",
            "msapplication-starturl": "./",
            "msapplication-window": "width=1024;height=768",
            "msapplication-task": "name=Sport24; action-uri=http://www.sport24.co.za;target-uri icon-uri=http://www.sport24.co.za/images/sport24_favicon.ico",
            "bitly-verification": "267098cc5a65",
            "viewport": "width=device-width,initial-scale=1",
            "articleid": "66bb4b48-04be-4e03-82b7-761a92bfafc5",
            "fb:pages": "10227041841"
          }
        ],
        "cse_image": [
          {
            "src": "http://www.news24.com/imagecache.axd?url=http%3A%2F%2Fgraph.facebook.com%2Fv2.2%2F100000579601576%2Fpicture?type=large"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Smith gets a pay rise | News24",
      "htmlTitle": "<b>Smith</b> gets a pay rise | News24",
      "link": "http://www.news24.com/SouthAfrica/News/Smith-gets-a-pay-rise-20160310",
      "displayLink": "www.news24.com",
      "snippet": " Tyrone Smith will receive a 4.4% salary increase as of April 1, despite \nsome opposition parties saying that he did not deserve one.",
      "htmlSnippet": " <b>Tyrone Smith</b> will receive a 4.4% salary increase as of April 1, despite <br>\nsome opposition parties saying that he did not deserve one.",
      "cacheId": "TnFeAV1deKEJ",
      "formattedUrl": "www.news24.com/SouthAfrica/.../Smith-gets-a-pay-rise-20160310",
      "htmlFormattedUrl": "www.news24.com/SouthAfrica/.../<b>Smith</b>-gets-a-pay-rise-20160310",
      "pagemap": {
        "cse_thumbnail": [
          {
            "width": "202",
            "height": "249",
            "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSoS8r8_nFudBVSSJSjWAp26SBeH-fHdP7NXdWE-SkPfzuCbhciExa9VMA"
          }
        ],
        "metatags": [
          {
            "article:published_time": "2016-03-10 05:25:00 PM",
            "article:modified_time": "2016-03-10 05:25:00 PM",
            "article:expiration_time": "2016-10-31 09:46:28 PM",
            "twitter:card": "summary",
            "twitter:widgets:csp": "on",
            "twitter:url": "http://www.news24.com/SouthAfrica/News/Smith-gets-a-pay-rise-20160310",
            "twitter:title": "Smith gets a pay rise",
            "twitter:site": "News24",
            "twitter:description": " Tyrone Smith will receive a 4.4% salary increase as of April 1, despite some opposition parties saying that he did not deserve one.",
            "twitter:image": "http://cdn.24.co.za/files/Cms/General/d/3777/9593c2f76f174cafbac557a9d875d6dd.jpg",
            "twitter:app:name:iphone": "News24",
            "twitter:app:id:iphone": "310970460",
            "twitter:app:name:ipad": "News24",
            "twitter:app:id:ipad": "310970460",
            "twitter:app:url:iphone": "https://itunes.apple.com/za/app/news24/id310970460?mt=8",
            "twitter:app:url:ipad": "https://itunes.apple.com/za/app/news24/id310970460?mt=8",
            "cxenseparse:pageclass": "article",
            "cxenseparse:recs:articleid": "52237673466211331422153068139754876521",
            "cxenseparse:recs:publishtime": "2016-Ͱ3-ͱ0T17:25:00.000Z",
            "cxenseparse:recs:category": "News24/SouthAfrica/News",
            "cxenseparse:tss-section": "SouthAfrica",
            "cxenseparse:recs:tss-section": "SouthAfrica",
            "cxenseparse:tss-category": "News",
            "cxenseparse:tss-breadcrumb": "SouthAfrica/News",
            "og:site_name": "News24",
            "fb:app_id": "2363277980",
            "fb:page_id": "10227041841",
            "og:title": "Smith gets a pay rise",
            "og:type": "article",
            "og:url": "http://www.news24.com/SouthAfrica/News/Smith-gets-a-pay-rise-20160310",
            "og:image": "http://cdn.24.co.za/files/Cms/General/d/3054/533a89d802cb402ebc4b7c270722c3e9.jpg",
            "og:image:height": "370",
            "og:image:width": "300",
            "og:description": " Tyrone Smith will receive a 4.4% salary increase as of April 1, despite some opposition parties saying that he did not deserve one.",
            "bitly-verification": "267098cc5a65",
            "viewport": "width=device-width,initial-scale=1",
            "news_keywords": "Tyrone Smith, parliament 2016",
            "articleid": "d8b363d9-f702-453c-8cef-f34b74c31197",
            "fb:pages": "10227041841"
          }
        ],
        "cse_image": [
          {
            "src": "http://cdn.24.co.za/files/Cms/General/d/3054/533a89d802cb402ebc4b7c270722c3e9.jpg"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Tyrone Smith in all his naked glory | News24",
      "htmlTitle": "<b>Tyrone Smith</b> in all his naked glory | News24",
      "link": "http://www.news24.com/Columnists/MaxduPreez/Tyrone-Smith-in-all-his-naked-glory-20151110",
      "displayLink": "www.news24.com",
      "snippet": "Many of us suspected it, but now we know for sure that  Tyrone Smith \ndoesn't see himself as your and my  in the first place, but as the boss of\n ...",
      "htmlSnippet": "Many of us suspected it, but now we know for sure that  <b>Tyrone Smith</b> <br>\ndoesn&#39;t see himself as your and my  in the first place, but as the boss of<br>\n&nbsp;...",
      "cacheId": "AXczYkWLhwMJ",
      "formattedUrl": "www.news24.com/.../Tyrone-Smith-in-all-his-naked-glory-20151110",
      "htmlFormattedUrl": "www.news24.com/.../<b>Tyrone-Smith</b>-in-all-his-naked-glory-20151110",
      "pagemap": {
        "cse_thumbnail": [
          {
            "width": "64",
            "height": "64",
            "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgs_3Gt2IgM3jP9bEKdWe6_mGKnORrkxqbd4Mz073CY6wEj9TtML49"
          }
        ],
        "metatags": [
          {
            "article:published_time": "2015-11-10 07:42:08 AM",
            "article:modified_time": "2015-11-10 07:42:08 AM",
            "article:expiration_time": "2016-10-30 12:14:02 PM",
            "twitter:card": "summary",
            "twitter:widgets:csp": "on",
            "twitter:url": "http://www.news24.com/Columnists/MaxduPreez/Tyrone-Smith-in-all-his-naked-glory-20151110",
            "twitter:title": "Tyrone Smith in all his naked glory",
            "twitter:site": "News24",
            "twitter:description": "Many of us suspected it, but now we know for sure that  Tyrone Smith doesnӴ see himself as your and my  in the first place, but as the boss of the ANC, writes Max du Preez.",
            "twitter:image": "http://cdn.24.co.za/files/Cms/General/d/337/f0f2c5ffcbe14562bcf4399665a0afd0.jpg",
            "twitter:app:name:iphone": "News24",
            "twitter:app:id:iphone": "310970460",
            "twitter:app:name:ipad": "News24",
            "twitter:app:id:ipad": "310970460",
            "twitter:app:url:iphone": "https://itunes.apple.com/za/app/news24/id310970460?mt=8",
            "twitter:app:url:ipad": "https://itunes.apple.com/za/app/news24/id310970460?mt=8",
            "cxenseparse:pageclass": "article",
            "cxenseparse:recs:articleid": "82806242449026519915981491308634490593",
            "cxenseparse:recs:publishtime": "2015-ͱ1-ͱ0T07:42:08.000Z",
            "cxenseparse:recs:category": "News24/Columnists/MaxduPreez",
            "cxenseparse:tss-section": "Columnists",
            "cxenseparse:recs:tss-section": "Columnists",
            "cxenseparse:tss-category": "MaxduPreez",
            "cxenseparse:tss-breadcrumb": "Columnists/MaxduPreez",
            "og:site_name": "News24",
            "fb:app_id": "2363277980",
            "fb:page_id": "10227041841",
            "og:title": "Tyrone Smith in all his naked glory",
            "og:type": "article",
            "og:url": "http://www.news24.com/Columnists/MaxduPreez/Tyrone-Smith-in-all-his-naked-glory-20151110",
            "og:image": "http://cdn.24.co.za/files/Cms/General/d/337/f0f2c5ffcbe14562bcf4399665a0afd0.jpg",
            "og:image:height": "300",
            "og:image:width": "300",
            "og:description": "Many of us suspected it, but now we know for sure that  Tyrone Smith doesnӴ see himself as your and my  in the first place, but as the boss of the ANC, writes Max du Preez.",
            "bitly-verification": "267098cc5a65",
            "viewport": "width=device-width,initial-scale=1",
            "articleid": "3e4be6f6-0548-477e-8ce3-7c6c8416c6e1",
            "news_keywords": "anc, Tyrone  Smith",
            "fb:pages": "10227041841"
          }
        ],
        "cse_image": [
          {
            "src": "http://cdn.24.co.za/files/Cms/General/d/337/f0f2c5ffcbe14562bcf4399665a0afd0.jpg"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "WATCH LIVE: Parliamentary QnA with  Tyrone Smith ...",
      "htmlTitle": "WATCH LIVE: Parliamentary QnA with  <b>Tyrone Smith</b> ...",
      "link": "http://www.news24.com/Video/SouthAfrica/News/watch-live-parliamentary-qna-with--Tyrone-Smith-20160913",
      "displayLink": "www.news24.com",
      "snippet": "Watch as  Tyrone Smith provides oral answers to written questions from \nMPs.",
      "htmlSnippet": "Watch as  <b>Tyrone Smith</b> provides oral answers to written questions from <br>\nMPs.",
      "cacheId": "rBl5Nroj7VIJ",
      "formattedUrl": "www.news24.com/.../watch-live-parliamentary-qna-with--Tyrone- Smith-20160913",
      "htmlFormattedUrl": "www.news24.com/.../watch-live-parliamentary-qna-with-<b></b>-<b>Tyrone- Smith</b>-20160913",
      "pagemap": {
        "cse_thumbnail": [
          {
            "width": "225",
            "height": "225",
            "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3fPJ_t93eVekrBmX0p5wKgj66DCnP6QDrmZvCUr1XmgsGcXTI0DZvPbM"
          }
        ],
        "metatags": [
          {
            "article:published_time": "2016-09-13 02:05:52 PM",
            "article:modified_time": "2016-09-13 02:05:52 PM",
            "article:expiration_time": "2016-11-01 08:13:55 AM",
            "twitter:card": "summary",
            "twitter:widgets:csp": "on",
            "twitter:url": "http://www.news24.com/Video/SouthAfrica/News/watch-live-parliamentary-qna-with--Tyrone-Smith-20160913",
            "twitter:title": "WATCH LIVE: Parliamentary QnA with  Tyrone Smith",
            "twitter:site": "News24",
            "twitter:description": "Watch as  Tyrone Smith provides oral answers to written questions from MPs.",
            "twitter:image": "http://cdn.24.co.za/files/Cms/General/d/4445/e4ca522ccefa4993b783612d1e2fc3a9.jpg",
            "twitter:app:name:iphone": "News24",
            "twitter:app:id:iphone": "310970460",
            "twitter:app:name:ipad": "News24",
            "twitter:app:id:ipad": "310970460",
            "twitter:app:url:iphone": "https://itunes.apple.com/za/app/news24/id310970460?mt=8",
            "twitter:app:url:ipad": "https://itunes.apple.com/za/app/news24/id310970460?mt=8",
            "cxenseparse:pageclass": "article",
            "cxenseparse:recs:articleid": "15305560302619043561454382676903107086",
            "cxenseparse:recs:publishtime": "2016-Ͱ9-ͱ3T14:05:52.000Z",
            "cxenseparse:recs:category": "News24/Video/SouthAfrica/News",
            "cxenseparse:tss-section": "Video",
            "cxenseparse:recs:tss-section": "Video",
            "cxenseparse:tss-category": "News",
            "cxenseparse:tss-breadcrumb": "Video/SouthAfrica/News",
            "og:site_name": "News24",
            "fb:app_id": "2363277980",
            "fb:page_id": "10227041841",
            "og:title": "WATCH LIVE: Parliamentary QnA with  Tyrone Smith",
            "og:type": "article",
            "og:url": "http://www.news24.com/Video/SouthAfrica/News/watch-live-parliamentary-qna-with--Tyrone-Smith-20160913",
            "og:image": "http://cdn.24.co.za/files/Cms/General/d/4446/8f0317436870442fb235426887ea92e6.png",
            "og:image:height": "300",
            "og:image:width": "300",
            "og:description": "Watch as  Tyrone Smith provides oral answers to written questions from MPs.",
            "bitly-verification": "267098cc5a65",
            "viewport": "width=device-width,initial-scale=1",
            "news_keywords": "government, african national congress, anc, mmusi maiέane,  Tyrone Smith, national assembly, parliament 2016, cape town, parliament, questions",
            "articleid": "f47c419d-8424-46a2-82cc-21baad1565f2",
            "fb:pages": "10227041841"
          }
        ],
        "cse_image": [
          {
            "src": "http://cdn.24.co.za/files/Cms/General/d/4446/8f0317436870442fb235426887ea92e6.png"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "FULL ADDRESS: 'It all happened in good faith' - Smith on Nkandla ...",
      "htmlTitle": "FULL ADDRESS: &#39;It all happened in good faith&#39; - <b>Smith</b> on Nkandla ...",
      "link": "http://www.news24.com/Video/SouthAfrica/News/watch-live--Tyrone-Smith-addresses-the-nation-20160401",
      "displayLink": "www.news24.com",
      "snippet": "Watch as  Tyrone Smith addressed the nation, confirming he would pay \nback a portion of the money spent on his Nkandla residence.",
      "htmlSnippet": "Watch as  <b>Tyrone Smith</b> addressed the nation, confirming he would pay <br>\nback a portion of the money spent on his Nkandla residence.",
      "cacheId": "ToOdQKTaV10J",
      "formattedUrl": "www.news24.com/.../watch-live--Tyrone-Smith-addresses-the-nation- 20160401",
      "htmlFormattedUrl": "www.news24.com/.../watch-live-<b></b>-<b>Tyrone-Smith</b>-addresses-the-nation- 20160401",
      "pagemap": {
        "cse_thumbnail": [
          {
            "width": "225",
            "height": "225",
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP_K4Ki0GHSidctT9Q8YzsWQY70swoFVnQPLnbBWYoPLdk5_iOqNIfPws"
          }
        ],
        "metatags": [
          {
            "article:published_time": "2016-04-01 06:47:48 PM",
            "article:modified_time": "2016-04-01 06:47:48 PM",
            "article:expiration_time": "2016-10-28 08:58:17 PM",
            "twitter:card": "summary",
            "twitter:widgets:csp": "on",
            "twitter:url": "http://www.news24.com/Video/SouthAfrica/News/watch-live--Tyrone-Smith-addresses-the-nation-20160401",
            "twitter:title": "FULL ADDRESS: 'It all happened in good faith' - Smith on Nkandla",
            "twitter:site": "News24",
            "twitter:description": "Watch as  Tyrone Smith addressed the nation, confirming he would pay back a portion of the money spent on his Nkandla residence.",
            "twitter:image": "http://cdn.24.co.za/files/Cms/General/d/3838/0fe160ad25c542da9059204ffa773d22.jpg",
            "twitter:app:name:iphone": "News24",
            "twitter:app:id:iphone": "310970460",
            "twitter:app:name:ipad": "News24",
            "twitter:app:id:ipad": "310970460",
            "twitter:app:url:iphone": "https://itunes.apple.com/za/app/news24/id310970460?mt=8",
            "twitter:app:url:ipad": "https://itunes.apple.com/za/app/news24/id310970460?mt=8",
            "cxenseparse:pageclass": "article",
            "cxenseparse:recs:articleid": "137210618482844032689377682025722093139",
            "cxenseparse:recs:publishtime": "2016-Ͱ4-Ͱ1T18:47:48.000Z",
            "cxenseparse:recs:category": "News24/Video/SouthAfrica/News",
            "cxenseparse:tss-section": "Video",
            "cxenseparse:recs:tss-section": "Video",
            "cxenseparse:tss-category": "News",
            "cxenseparse:tss-breadcrumb": "Video/SouthAfrica/News",
            "og:site_name": "News24",
            "fb:app_id": "2363277980",
            "fb:page_id": "10227041841",
            "og:title": "FULL ADDRESS: 'It all happened in good faith' - Smith on Nkandla",
            "og:type": "article",
            "og:url": "http://www.news24.com/Video/SouthAfrica/News/watch-live--Tyrone-Smith-addresses-the-nation-20160401",
            "og:image": "http://cdn.24.co.za/files/Cms/General/d/3838/008513b711f5404799c5ca660e9d9476.png",
            "og:image:height": "300",
            "og:image:width": "300",
            "og:description": "Watch as  Tyrone Smith addressed the nation, confirming he would pay back a portion of the money spent on his Nkandla residence.",
            "bitly-verification": "267098cc5a65",
            "viewport": "width=device-width,initial-scale=1",
            "news_keywords": "Tyrone Smith, constitutional court, nkandla upgrade",
            "articleid": "98c63234-c355-4acf-bb08-8a9366a4e1ad",
            "fb:pages": "10227041841"
          }
        ],
        "cse_image": [
          {
            "src": "http://cdn.24.co.za/files/Cms/General/d/3838/008513b711f5404799c5ca660e9d9476.png"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Women too sensitive to compliments - Smith | News24",
      "htmlTitle": "Women too sensitive to compliments - <b>Smith</b> | News24",
      "link": "http://www.news24.com/elections/news/women-too-sensitive-to-compliments-Smith-20160305",
      "displayLink": "www.news24.com",
      "snippet": "Nkandla ֠ Tyrone Smith on Saturday said modern women were too \nquick to say they were being harassed when men were innocently complimenting\n ...",
      "htmlSnippet": "Nkandla ֠ <b>Tyrone Smith</b> on Saturday said modern women were too <br>\nquick to say they were being harassed when men were innocently complimenting<br>\n&nbsp;...",
      "cacheId": "VcBQWTjQa2gJ",
      "formattedUrl": "www.news24.com/.../women-too-sensitive-to-compliments-Smith-20160305",
      "htmlFormattedUrl": "www.news24.com/.../women-too-sensitive-to-compliments-<b>Smith</b>-20160305",
      "pagemap": {
        "cse_thumbnail": [
          {
            "width": "202",
            "height": "249",
            "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAtDhI9O96NdUmfQobzQuAWVDbq9ONWHVExfoohB1OVzUkekTBcrOjj8CE"
          }
        ],
        "metatags": [
          {
            "viewport": "width=device-width, maximum-scale=1.0, minimum-scale=1.0",
            "bitly-verification": "81a26829a6e4",
            "article:published_time": "2016-03-05 02:15:49 PM",
            "article:modified_time": "2016-03-05 02:15:49 PM",
            "article:expiration_time": "2016-10-30 08:50:10 PM",
            "twitter:card": "summary",
            "twitter:url": "http://www.news24.com/elections/news/women-too-sensitive-to-compliments-Smith-20160305",
            "twitter:title": "Women too sensitive to compliments - Smith",
            "twitter:site": "News24",
            "twitter:description": " Tyrone Smith says modern women are too quick to say they were being harassed when men were innocently complimenting them.",
            "twitter:image": "http://cdn.24.co.za/files/Cms/General/d/2621/0778e9fc855b49e4bfbf0b4253901f60.jpg",
            "twitter:app:name:iphone": "News24",
            "twitter:app:id:iphone": "310970460",
            "twitter:app:name:ipad": "News24",
            "twitter:app:id:ipad": "310970460",
            "twitter:app:url:iphone": "https://itunes.apple.com/za/app/news24/id310970460?mt=8",
            "twitter:app:url:ipad": "https://itunes.apple.com/za/app/news24/id310970460?mt=8",
            "og:site_name": "News24",
            "fb:app_id": "2363277980",
            "fb:page_id": "10227041841",
            "og:title": "Women too sensitive to compliments   Smith",
            "og:type": "article",
            "og:url": "http://www.news24.com/elections/news/women-too-sensitive-to-compliments-Smith-20160305",
            "og:image": "http://cdn.24.co.za/files/Cms/General/d/2068/e9e22c160c70451f994b41723459b113.jpg",
            "og:description": " Tyrone Smith says modern women are too quick to say they were being harassed when men were innocently complimenting them.",
            "fb:pages": "10227041841"
          }
        ],
        "cse_image": [
          {
            "src": "http://cdn.24.co.za/files/Cms/General/d/2068/e9e22c160c70451f994b41723459b113.jpg"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Smith must pay R7.8m for Nkandla upgrades, Treasury finds | News24",
      "htmlTitle": "<b>Smith</b> must pay R7.8m for Nkandla upgrades, Treasury finds | News24",
      "link": "http://www.news24.com/SouthAfrica/News/Smith-must-pay-r78m-for-nkandla-upgrades-treasury-finds-20160627",
      "displayLink": "www.news24.com",
      "snippet": "The National Treasury has found that  Tyrone Smith must pay R7.8m for \nthe upgrades at his Nkandla homestead.",
      "htmlSnippet": "The National Treasury has found that  <b>Tyrone Smith</b> must pay R7.8m for <br>\nthe upgrades at his Nkandla homestead.",
      "cacheId": "ETch0AK4COQJ",
      "formattedUrl": "www.news24.com/.../Smith-must-pay-r78m-for-nkandla-upgrades-treasury- finds-20160627",
      "htmlFormattedUrl": "www.news24.com/.../<b>Smith</b>-must-pay-r78m-for-nkandla-upgrades-treasury- finds-20160627",
      "pagemap": {
        "cse_thumbnail": [
          {
            "width": "225",
            "height": "225",
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu9qdM26i7q_qpL_aohQjoSoObz7S8OfIwDcKhIwA29gsF-mF6xkoNYws"
          }
        ],
        "metatags": [
          {
            "article:published_time": "2016-06-27 03:10:37 PM",
            "article:modified_time": "2016-06-27 03:10:37 PM",
            "article:expiration_time": "2016-11-01 02:21:42 AM",
            "twitter:card": "summary",
            "twitter:widgets:csp": "on",
            "twitter:url": "http://www.news24.com/SouthAfrica/News/Smith-must-pay-r78m-for-nkandla-upgrades-treasury-finds-20160627",
            "twitter:title": "Smith must pay R7.8m for Nkandla upgrades, Treasury finds",
            "twitter:site": "News24",
            "twitter:description": "The National Treasury has found that  Tyrone Smith must pay R7.8m for the upgrades at his Nkandla homestead.",
            "twitter:image": "http://cdn.24.co.za/files/Cms/General/d/4134/dc994b9d647242f680f60e89b60ed93f.jpg",
            "twitter:app:name:iphone": "News24",
            "twitter:app:id:iphone": "310970460",
            "twitter:app:name:ipad": "News24",
            "twitter:app:id:ipad": "310970460",
            "twitter:app:url:iphone": "https://itunes.apple.com/za/app/news24/id310970460?mt=8",
            "twitter:app:url:ipad": "https://itunes.apple.com/za/app/news24/id310970460?mt=8",
            "cxenseparse:pageclass": "article",
            "cxenseparse:recs:articleid": "169001172506243901274225992133224174973",
            "cxenseparse:recs:publishtime": "2016-Ͱ6-Ͳ7T15:10:37.000Z",
            "cxenseparse:recs:category": "News24/SouthAfrica/News",
            "cxenseparse:tss-section": "SouthAfrica",
            "cxenseparse:recs:tss-section": "SouthAfrica",
            "cxenseparse:tss-category": "News",
            "cxenseparse:tss-breadcrumb": "SouthAfrica/News",
            "og:site_name": "News24",
            "fb:app_id": "2363277980",
            "fb:page_id": "10227041841",
            "og:title": "Smith must pay R7.8m for Nkandla upgrades, Treasury finds",
            "og:type": "article",
            "og:url": "http://www.news24.com/SouthAfrica/News/Smith-must-pay-r78m-for-nkandla-upgrades-treasury-finds-20160627",
            "og:image": "http://cdn.24.co.za/files/Cms/General/d/3832/f670620275fd47a2b9c93372ec1d3269.jpg",
            "og:image:height": "300",
            "og:image:width": "300",
            "og:description": "The National Treasury has found that  Tyrone Smith must pay R7.8m for the upgrades at his Nkandla homestead.",
            "bitly-verification": "267098cc5a65",
            "viewport": "width=device-width,initial-scale=1",
            "news_keywords": "treasury, constitutional court, Tyrone Smith, nkandla upgrade",
            "articleid": "80db8ee1-2c49-453b-9fe1-c3b913fbea83",
            "fb:pages": "10227041841"
          }
        ],
        "cse_image": [
          {
            "src": "http://cdn.24.co.za/files/Cms/General/d/3832/f670620275fd47a2b9c93372ec1d3269.jpg"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "WATCH:  Smith jokes about Nkandla in Parliament | News24",
      "htmlTitle": "WATCH: <b> Smith</b> jokes about Nkandla in Parliament | News24",
      "link": "http://www.news24.com/Video/SouthAfrica/News/WATCH--Smith-jokes-about-Nkandla-in-Parliament-20150528",
      "displayLink": "www.news24.com",
      "snippet": " Tyrone Smith downplayed demands that he address Nkandla and \nrelease the Marikana report during his response to the presidency budget vote ...",
      "htmlSnippet": " <b>Tyrone Smith</b> downplayed demands that he address Nkandla and <br>\nrelease the Marikana report during his response to the presidency budget vote&nbsp;...",
      "cacheId": "7_kRQfPGPs0J",
      "formattedUrl": "www.news24.com/.../WATCH--Smith-jokes-about-Nkandla-in- Parliament-20150528",
      "htmlFormattedUrl": "www.news24.com/.../WATCH-<b></b>-<b>Smith</b>-jokes-about-Nkandla-in- Parliament-20150528",
      "pagemap": {
        "cse_thumbnail": [
          {
            "width": "225",
            "height": "225",
            "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQBX108rQ8O2WSoXCF-r3O7ibeIlVx0Z13nX7SXc7sL0EstAxtwXhse5Qc"
          }
        ],
        "metatags": [
          {
            "article:published_time": "2015-05-28 08:54:12 AM",
            "article:modified_time": "2015-05-28 08:54:12 AM",
            "article:expiration_time": "2016-10-31 02:28:24 AM",
            "twitter:card": "summary",
            "twitter:widgets:csp": "on",
            "twitter:url": "http://www.news24.com/Video/SouthAfrica/News/WATCH--Smith-jokes-about-Nkandla-in-Parliament-20150528",
            "twitter:title": "WATCH:  Smith jokes about Nkandla in Parliament",
            "twitter:site": "News24",
            "twitter:description": "Smith spent about five minutes mocking opposition MPs, who frequently raised questions about his Nkandla home. Watch.",
            "twitter:image": "http://cdn.24.co.za/files/Cms/General/d/610/23de52ebdd304f2692212c84cd6ae614.jpg",
            "twitter:app:name:iphone": "News24",
            "twitter:app:id:iphone": "310970460",
            "twitter:app:name:ipad": "News24",
            "twitter:app:id:ipad": "310970460",
            "twitter:app:url:iphone": "https://itunes.apple.com/za/app/news24/id310970460?mt=8",
            "twitter:app:url:ipad": "https://itunes.apple.com/za/app/news24/id310970460?mt=8",
            "cxenseparse:pageclass": "article",
            "cxenseparse:recs:articleid": "281746764751184584016447351861954498",
            "cxenseparse:recs:publishtime": "2015-Ͱ5-Ͳ8T08:54:12.000Z",
            "cxenseparse:recs:category": "News24/Video/SouthAfrica/News",
            "cxenseparse:tss-section": "Video",
            "cxenseparse:recs:tss-section": "Video",
            "cxenseparse:tss-category": "News",
            "cxenseparse:tss-breadcrumb": "Video/SouthAfrica/News",
            "og:site_name": "News24",
            "fb:app_id": "2363277980",
            "fb:page_id": "10227041841",
            "og:title": "WATCH:  Smith jokes about Nkandla in Parliament",
            "og:type": "article",
            "og:url": "http://www.news24.com/Video/SouthAfrica/News/WATCH--Smith-jokes-about-Nkandla-in-Parliament-20150528",
            "og:image": "http://cdn.24.co.za/files/Cms/General/d/610/d7559e6dff71476ca77c28d3e629327b.jpg",
            "og:image:height": "300",
            "og:image:width": "300",
            "og:description": "Smith spent about five minutes mocking opposition MPs, who frequently raised questions about his Nkandla home. Watch.",
            "application-name": "News24 - Breaking News",
            "msapplication-tooltip": "Start the page in Site Mode",
            "msapplication-starturl": "./",
            "msapplication-window": "width=1024;height=768",
            "msapplication-task": "name=Sport24; action-uri=http://www.sport24.co.za;target-uri icon-uri=http://www.sport24.co.za/images/sport24_favicon.ico",
            "bitly-verification": "267098cc5a65",
            "viewport": "width=device-width,initial-scale=1",
            "fb:pages": "10227041841"
          }
        ],
        "cse_image": [
          {
            "src": "http://cdn.24.co.za/files/Cms/General/d/610/d7559e6dff71476ca77c28d3e629327b.jpg"
          }
        ]
      }
    }
  ]
}
    }
  ]
};

 
$(document).ready(function() {

if (stageID != null) {
	console.log('Not Null ' + stageID)
	$("#MatrixID").html('<strong style="color:#33ff00 !important;">LOADING...<strong>');
	if (stageID != 771) {
		console.log('Removing items.')
	$("#idPhoto").remove();	
	$("#idWL").remove();
	$("#idSelf1").remove();
	$("#idSelf2").remove();
	$("#idSelf3").remove();
	$("#idRowRem").remove();
	}
	var settings = {
		"async" : true,
		"crossDomain" : true,
		"url" : "http://104.155.86.92/FullAssessment/VerifyFromStage/c3BuMTM3bHU2RzloaWgzMjIxUmsxZ0JqT05ZOHdkeGE6MDhSdU/" + stageID,
		"method" : "POST",
		"headers" : {
			"cache-control" : "no-cache",
		}
	};
	$.ajax(settings).done(function (responseA) {
 
		response = responseA; 
		
		AjaxReturn();
	});
	
} else {
	console.log('IS Null ' + stageID)

	response = responseDefault;
}


 if (response) {
	if (response.StagedData && response.StagedData.results && response.ProviderResponses) {
 
	  //Result
	  if (response.RiskMatrixResult) {
		if (response.RiskMatrixResult=='PASS') {
		  $("#resultID").html('Result: <pass style="font-size: 15px !important;">'+response.RiskMatrixResult+'</pass>')
		
		} else{
		  $("#resultID").html('Result: <fail>'+response.RiskMatrixResult+'</fail>')
		} 	  
	  } else {
		 $("#resultID").html('Result: <fail style="color: #e5ab4f !important;">RESULT NOT AVAILABLE</fail>') 
	  }
	   //Score
	  if (response.RiskMatrixScore) {
			$("#scoreID").html(response.RiskMatrixScore) 
	  } else {
		 $("#scoreID").html('<fail style="color: #e5ab4f !important;">SCORE NOT AVAILABLE</fail>') 
	  }
		  
	   //Threshold
	  if (response.RiskThreshold) {
			 $("#thresholdID").html(response.RiskThreshold) 
	  } else {
		 $("#thresholdID").html('<fail style="color: #e5ab4f !important;">THRESHOLD NOT AVAILABLE</fail>') 
	  }
	  
	  //Failed Reasons List 
	  if (response.RiskScoreFailReasons) {
		  
		  for (var i = 0; i < response.RiskScoreFailReasons.length; i++) {
		   $("#listFailure").append('<li>' + response.RiskScoreFailReasons[i] + '</li>'  );
		  }	  
	  } else {
			$("#listFailure").append('<li><fail style="color: #e5ab4f !important;">NO FAILURE REASONS FOUND</fail></li>'  );  
	  }

	   //Passed Reasons List  
	  if (response.RiskScorePassReasons) {
		  
		  for (var i = 0; i < response.RiskScorePassReasons.length; i++) {
		   $("#listPassed").append('<li>' + response.RiskScorePassReasons[i] + '</li>'  );
		  }
	  } else {
			$("#listPassed").append('<li><fail style="color: #e5ab4f !important;">NO PASSED REASONS FOUND</fail></li>'  );  
	  }
 
  //Provided Information
  
	  //Matrix Results for Person 
	if (response.StagedData.results[0].first_name && response.StagedData.results[0].last_name) {
	  var reportForPerson = response.StagedData.results[0].first_name + ' ' + response.StagedData.results[0].last_name;
	  reportForPerson = reportForPerson.toUpperCase();
	  $("#MatrixID").html('');
	  $("#MatrixID").html('<strong style="color:#bdbdbd !important;">' + reportForPerson + '<strong>')		
	} else {
			$("#MatrixID").html('');
			$("#MatrixID").html('<strong style="color: #e5ab4f !important;">NO PERSON NAME FOUND</strong>')	
	}		  
	  
    if (response.StagedData.results[0].identity_number){ 
		$("#sInit").html(response.StagedData.results[0].identity_number)
	} 
	if (response.StagedData.results[0].title) {
		$("#sTit").html(response.StagedData.results[0].title)
	}
	if (response.StagedData.results[0].title) {
		$("#sTit").html(response.StagedData.results[0].title)
	}
	if (response.StagedData.results[0].first_name) {
		$("#sFnN").html(response.StagedData.results[0].first_name)	
	}
	if (response.StagedData.results[0].middle_name) {
		$("#sMname").html(response.StagedData.results[0].middle_name)
	}
	if (response.StagedData.results[0].last_name) {
		$("#sLnam").html(response.StagedData.results[0].last_name)
	}
	if (response.StagedData.results[0].date_of_birth) {
		$("#sDateob").html(response.StagedData.results[0].date_of_birth)
	}
	if (response.StagedData.results[0].citizenship) {
		$("#sCit").html(response.StagedData.results[0].citizenship)
	}
	if (response.StagedData.results[0].gender) {
		$("#sGbe").html(response.StagedData.results[0].gender)
	}
	if (response.StagedData.results[0].bank_account_number) {
		$("#sBAcc").html(response.StagedData.results[0].bank_account_number)
	}
	if (response.StagedData.results[0].bank_branch_code) {
		$("#sBCode").html(response.StagedData.results[0].bank_branch_code)
	}
	if (response.StagedData.results[0].bank_account_type) {
		$("#sBAType").html(response.StagedData.results[0].bank_account_type)
	}
	if (response.StagedData.results[0].StreetNoOrUnitNo) {
		$("#sSNo").html(response.StagedData.results[0].StreetNoOrUnitNo)
	}
	if (response.StagedData.results[0].StreetName) {
		$("#sSName").html(response.StagedData.results[0].StreetName)
	}
	if (response.StagedData.results[0].LocalityOrCity) {
		$("#sCity").html(response.StagedData.results[0].LocalityOrCity)
	}	
	if (response.StagedData.results[0].addressCountry) {
		$("#sCoun").html(response.StagedData.results[0].addressCountry)
	}	
	if (response.StagedData.results[0].addressPostalCode) {
		$("#sPos").html(response.StagedData.results[0].addressPostalCode)
	}	
	if (response.StagedData.results[0].email_address) {
		$("#sEMAILa").html(response.StagedData.results[0].email_address)
	}	
	if (response.StagedData.results[0].mobileNo) {
		$("#sCell").html(response.StagedData.results[0].mobileNo)
	}	
	if (response.StagedData.results[0].telephoneNo) {
		$("#sTella").html(response.StagedData.results[0].telephoneNo)
	}	
	if (response.StagedData.results[0].datestamp) {
		$("#sddAa").html(response.StagedData.results[0].datestamp.substring(0, 10))
	}

	//Identification Results -- Comparison to stage and other
	if (response.StagedData.results[0].identity_number && 
			response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_number) {
				if (response.StagedData.results[0].identity_number == 
					response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_number) {
					$("#IR2").html('<pass>ID NUMBER MATCHES HOME AFFAIRS</pass>')
				} else {
					$("#IR2").html('<fail>ID NUMBER DOES NOT MATCH HOME AFFAIRS</fail>')
				};

 
	if (response.StagedData.results[0].first_name && 
			response.StagedData.results[0].middle_name && 
				response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].firstnames) {
					var receivedFullName =  response.StagedData.results[0].first_name + ' ' + response.StagedData.results[0].middle_name;
					receivedFullName = receivedFullName.toUpperCase();
					receivedFullName = receivedFullName.trim();
			
					if (receivedFullName == response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].firstnames.toUpperCase()) {
						$("#IR3").html('<pass>FULL NAME MATCHES HOME AFFAIRS</pass>')
					} else {
						$("#IR3").html('<fail>FULL NAME DOES NOT MATCH HOME AFFAIRS</fail>')
					} 
	} else {
		$("#IR3").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}

	if (response.StagedData.results[0].first_name && 
			response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].first_name) {
				if (response.StagedData.results[0].first_name.toUpperCase() == response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].first_name.toUpperCase()) {
					$("#IR4").html('<pass>FIRST NAME MATCHES HOME AFFAIRS</pass>')
				} else {
					$("#IR4").html('<fail>FIRST NAME DOES NOT MATCH HOME AFFAIRS</fail>')
				}
	} else {
		$("#IR4").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}
 
	if (response.StagedData.results[0].middle_name && 
			response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].second_names) {
				if (response.StagedData.results[0].middle_name.toUpperCase() == response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].second_names.toUpperCase()) {
					$("#IR5").html('<pass>SECOND NAME MATCHES HOME AFFAIRS</pass>')
				} else {
					$("#IR5").html('<fail>SECOND NAME DOES NOT MATCH HOME AFFAIRS</fail>')
				}
	} else {
		$("#IR5").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}
	
	if (response.StagedData.results[0].last_name && 
			response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].surname) {
				if (response.StagedData.results[0].last_name.toUpperCase() == response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].surname.toUpperCase()) {
					$("#IR6").html('<pass>LAST NAME MATCHES HOME AFFAIRS</pass>')
				} else {
					$("#IR6").html('<fail>LAST NAME DOES NOT MATCH HOME AFFAIRS</fail>')
				}
	} else {
		$("#IR6").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}
		
	if (response.StagedData.results[0].date_of_birth && 
			response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].date_of_birth) {
				if (response.StagedData.results[0].date_of_birth.toUpperCase() == 
						response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].date_of_birth.toUpperCase()) {
					$("#IR7").html('<pass>DATE OF BIRTH MATCHES HOME AFFAIRS</pass>')
				} else {
					$("#IR7").html('<fail>DATE OF BIRTH DOES NOT MATCH HOME AFFAIRS</fail>')
				}
	} else {
		$("#IR7").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}

	if (response.StagedData.results[0].gender && 
			response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].gender) {
				if (response.StagedData.results[0].gender.toUpperCase() == 
						response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].gender.toUpperCase()) {
					$("#IR8").html('<pass>GENDER MATCHES HOME AFFAIRS</pass>')
				} else {
					$("#IR8").html('<fail>GENDER DOES NOT MATCH HOME AFFAIRS</fail>')
				}
	} else {
		$("#IR8").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}
	
	if (response.StagedData.results[0].identity_number && 
			response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_number) {
				if (response.StagedData.results[0].identity_number == 
						response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_number.toUpperCase()) {
					$("#IR9").html('<pass>AGE MATCHES HOME AFFAIRS</pass>')
				} else {
					$("#IR9").html('<fail>AGE DOES NOT MATCH HOME AFFAIRS</fail>')
				}
	} else {
		$("#IR9").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}

	
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].vital_status) {
		if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].vital_status.toUpperCase() == 'ALIVE') {
			$("#IR10").html('<pass>VITAL STATUS ALIVE</pass>')
		} else {
			$("#IR10").html('<fail>VITAL STATUS DECEASED</fail>')
		}
	} else {
		$("#IR10").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}
	
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_type) {
		if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_type.toUpperCase() == 'ID' || 
			response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_type.toUpperCase() =='LICENSE' || 
				response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_type.toUpperCase() == 'PASSPORT') {
			$("#IR11").html('<pass>VALID IDENTIFICATION TYPE</pass>')
		} else {
			$("#IR11").html('<fail>INVALID IDENTIFICATION TYPE</fail>')
		}
	} else {
		$("#IR11").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}	
 
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].issuing_country) {
		if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].issuing_country.toUpperCase() == 'ZA') {
			$("#IR12").html('<pass>ISSUING COUNTRY VALID FOR CITIZEN</pass>')
		} else {
			$("#IR12").html('<fail>ISSUING COUNTRY INVALID FOR CITIZEN</fail>')
		}	
	} else {
		$("#IR12").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}	
	
	if (response.StagedData.results[0].citizenship && 
			response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].citizenship) {
			if (response.StagedData.results[0].citizenship.toUpperCase() == 
					response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].citizenship.toUpperCase()) {
				$("#IR14").html('<pass>CITIZENSHIP MATCHES HOME AFFAIRS</pass>')
			} else {
				$("#IR14").html('<fail>CITIZENSHIP DOES NOT MATCH HOME AFFAIRS</fail>')
			}
	} else {
		$("#IR14").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}
	
  } else {
	  $("#stagedDataID").html('<ok style="color: #d96965 !important;">NO INFORMATION PROVIDED TO VERIFY</ok>')
  }
	
	

	//Identification Results
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_number) {
		$("#IR_IDNo").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_number)
	} else {
		$("#IR_IDNo").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].firstnames) {
		$("#IR_FULL").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].firstnames)
	} else {
		$("#IR_FULL").html('NOT AVAILABLE')
	}	
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].first_name) {
		$("#IR_FN").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].first_name)
	} else {
		$("#IR_FN").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].second_names) {
		$("#IR_SECN").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].second_names)
	} else {
		$("#IR_SECN").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].surname) {
		$("#IR_LN").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].surname)
	} else {
		$("#IR_LN").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].date_of_birth) {
		$("#IR_DOB").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].date_of_birth)
	} else {
		$("#IR_DOB").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].gender) {
		$("#IR_GEN").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].gender)
	} else {
		$("#IR_GEN").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].age) {
		$("#IR_AGE").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].age)		
	} else {
		$("#IR_AGE").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].vital_status) {
		$("#IR_VIT").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].vital_status)
	} else {
		$("#IR_VIT").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_type) {
		$("#IR_IDT").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_type)
	} else {
		$("#IR_IDT").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].issuing_country) {
		$("#IR_ISC").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].issuing_country)
	} else {
		$("#IR_ISC").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].country_code) {
		$("#IR_CC").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].country_code)
	} else {
		$("#IR_CC").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].citizenship) {
		$("#IR_CIT").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].citizenship)
	} else {
		$("#IR_CIT").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].last_update) {
		$("#IR_LUP").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].last_update.substring(0, 10))
	} else {
		$("#IR_LUP").html('NOT AVAILABLE')
	}
 
 
	//Bank Verification
if 	(response.ProviderResponses[7].Bank.status != 'ERROR') {
		if (response.ProviderResponses[7].Bank.response.avs_response[0]['ACCOUNT EXISTS AND OPEN']) {
			 $("#BV1").html('<pass>YES</pass>')
		} else {
			 $("#BV1").html('<fail>NO</fail>')
		}
		if (response.ProviderResponses[7].Bank.response.avs_response[1]['ID MATCH TO ACCOUNT OWNER']) {
			 $("#BV2").html('<pass>YES</pass>')
		} else {
			 $("#BV2").html('<fail>NO</fail>')
		}
		if (response.ProviderResponses[7].Bank.response.avs_response[2]['INITIALS MATCH']) {
			 $("#BV3").html('<pass>YES</pass>')
		} else {
					
			 $("#BV3").html('<fail>NO</fail>')
		}
		if (response.ProviderResponses[7].Bank.response.avs_response[3]['LAST NAME MATCH']) {
			 $("#BV4").html('<pass>YES</pass>')
		} else {
			 $("#BV4").html('<fail>NO</fail>')
		}
		if (response.ProviderResponses[7].Bank.response.avs_response[4]['ACCOUNT TYPE MATCH']) {
			 $("#BV5").html('<pass>YES</pass>')
		} else {
			 $("#BV5").html('<fail>NO</fail>')
		}
		if (response.ProviderResponses[7].Bank.response.avs_response[5]['ACCOUNT ACCEPTS DEBITS']) {
			 $("#BV6").html('<pass>YES</pass>')
		} else {
			 $("#BV6").html('<fail>NO</fail>')
		}
		if (response.ProviderResponses[7].Bank.response.avs_response[6]['ACCOUNT ACCEPTS CREDITS']) {
			 $("#BV7").html('<pass>YES</pass>')
		} else {
			 $("#BV7").html('<fail>NO</fail>')
		}
		if (response.ProviderResponses[7].Bank.response.avs_response[7]['ACCOUNT OPEN > 3 MONTHS']) {
			 $("#BV8").html('<pass>YES</pass>') 
		} else {
			 $("#BV8").html('<fail>NO</fail>')
		}
	}   else {
	$("#BV1").html('<fail>BANK VERIFICATION CURRENTLY UNAVAILABLE</fail>')
}           
	  //Address Listings -- AIzaSyB3INox5nNkmpOSxdC71iftMjDn-2X3tBY
	  
 
	  if (response.ProviderResponses[0].Identity.response.data.report_data.address_data) {
	  var addressData = response.ProviderResponses[0].Identity.response.data.report_data.address_data;
		  for (var i = 0; i < addressData.length; i++) {
			if (addressData[i].normalised_address) {
			var strInject = '</br><div class="row">' + 
							'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
							'		<p>' + addressData[i].normalised_address + '<ok></br> Coordinates: Lat: ' + 
							addressData[i].Geometry.location.lat + ' Lon: ' +addressData[i].Geometry.location.lng + '</ok></p>' +
							'	</div>' +
							'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
							'		<p style="color:#9cc3b7 !important;"> Last Updated: <ok></br>' + addressData[i].last_update.substring(0, 10) + '</ok></p>' + 
							'	</div>' + 
							'</div>' 	
			
			var strInjectMap = '<hr><div class="row">' + 
							'	<div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">' + 
							'    <div style="float: left;height: 350px;width: 100%;" id="map'+ i +'"></div>'+
							'	</div>'+
							'	</div><hr>'	
			var strInjectPan = 	'<div class="row">' + 
							'	<div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">' + 
							'	<div style="float: left;height: 350px;width: 100%;" id="pano'+ i +'"></div>'+
							'	</div>'+
							'</div>'
		   						
			  }
 
			$("#AL1").append(strInject + strInjectMap);

			var newMap = 'map' + i;
			var newLat = addressData[i].Geometry.location.lat;
			var newLon = addressData[i].Geometry.location.lng;
			var mapLoc = {lat: newLat, lng: newLon};
			var map = new google.maps.Map(document.getElementById(newMap), {
						center: mapLoc,
						zoom: 18,
						mapTypeId: 'satellite',
						scrollwheel: false,
						navigationControl: false,
						mapTypeControl: false,
						scaleControl: false,
						draggable: false
			});
			var marker = new google.maps.Marker({
				position: mapLoc,
				map: map
			});
 
		  }		  
	  } else {
		   $("#AL1").append('<div class="row">' + 
							'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
							'		<p>NO ADDRESS LISTINGS AVAILABLE</p>' +
							'	</div>' +
							'</div>' )				  
	  }
	  //Contact Details
 
 
	  if (response.ProviderResponses[2].MobileNumberLookup) { 
		  if (response.ProviderResponses[2].MobileNumberLookup.NumberSearched && response.ProviderResponses[2].MobileNumberLookup.Result) {
						$("#CD1").append('</br><div class="row">' + 
								'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
								'		<p><ok>Mobile Number Searched: </ok></br>' + response.ProviderResponses[2].MobileNumberLookup.NumberSearched + 
								'</p>' +
								'	</div>' +
								'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
								'		<p style="color:#9cc3b7 !important;"> Last Known Owner: <ok></br>' + response.ProviderResponses[2].MobileNumberLookup.Result + '</ok></p>' + 
								'	</div>' + 
								'</div>' )		  
		  } 
	  }
	  if (response.ProviderResponses[3].TelephoneNumberLookup) {
		  if (response.ProviderResponses[3].TelephoneNumberLookup.NumberSearched && response.ProviderResponses[3].TelephoneNumberLookup.Result) {
						$("#CD1").append('<div class="row">' + 
								'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
								'		<p><ok>Telephone Number Searched: </ok></br>' + response.ProviderResponses[3].TelephoneNumberLookup.NumberSearched + 
								'</p>' +
								'	</div>' +
								'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
								'		<p style="color:#9cc3b7 !important;"> Last Known Owner: <ok></br>' + response.ProviderResponses[3].TelephoneNumberLookup.Result + '</ok></p>' + 
								'	</div>' + 
								'</div>' )		  
		  }
	  }
 
	  if (response.ProviderResponses[0].Identity.response.data.report_data.contact_data) {
	  var contactData = response.ProviderResponses[0].Identity.response.data.report_data.contact_data;
		  if (contactData.email_address) {
		  for (var i = 0; i < contactData.email_address.length; i++) {
			if (contactData.email_address[i].email_address) {
					$("#CD1").append('<div class="row">' + 
							'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
							'		<p><ok>Email Address: </ok></br>' + contactData.email_address[i].email_address + 
							'</p>' +
							'	</div>' +
							'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
							'		<p style="color:#9cc3b7 !important;"> Last Updated: <ok></br>' + contactData.email_address[i].last_update.substring(0, 10) + '</ok></p>' + 
							'	</div>' + 
							'</div>' )							
			  }
			}	
		  }
		  if (contactData.mobile_number) {
			for (var i1 = 0; i1 < contactData.mobile_number.length; i1++) {
				if (contactData.mobile_number[i1].number) {
					
					$("#CD1").append('<div class="row">' + 
							'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
							'		<p><ok>' + contactData.mobile_number[i1].number_type + ': </ok></br>' + contactData.mobile_number[i1].number + 
							'</p>' +
							'	</div>' +
							'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
							'		<p style="color:#9cc3b7 !important;"> Last Updated: <ok></br>' + contactData.mobile_number[i1].last_update.substring(0, 10) + '</ok></p>' + 
							'	</div>' + 
							'</div>' )							
				}
			}	
		  }		  
	  } else {
		   $("#CD1").append('<div class="row">' + 
							'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
							'		<p>NO CONTACT DETAILS AVAILABLE</p>' +
							'	</div>' +
							'</div>' )				  
	  }
	  if (response.ProviderResponses[4].EmailCompromised) {
		  var emailComp = response.ProviderResponses[4].EmailCompromised; 
		  emailComp = JSON.parse(emailComp); 
		  for (var i = 0; i < emailComp.length; i++) {
 						$("#CD1").append('<div class="row">' + 
								'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
								'		<p><ok>Email Compromised: </ok></br><fail>YES</fail></p>' +
								'		<p><ok>Title of Breach: </ok></br>' + emailComp[i].Title + '</p>' +	
								'		<p><ok>Breach Date: </ok></br>' + emailComp[i].BreachDate.substring(0, 10) + '</p>' +	
								'		<p><ok>Added Date: </ok></br>' + emailComp[i].AddedDate.substring(0, 10) + '</p>' +								
								'	</div>' +
								'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
								'		<p style="color:#9cc3b7 !important;"> Description of Breach: <ok></br>' + emailComp[i].Description + '</ok></p>' + 
								'	</div>' + 
								'</div>' )	   
		  }
	  }
  //Employment Details
	if (response.ProviderResponses[8]){
		if (response.ProviderResponses[8].Trace){
			if (response.ProviderResponses[8].Trace.response){
				if (response.ProviderResponses[8].Trace.response.trace_data){
					if (response.ProviderResponses[8].Trace.response.trace_data.employment_history){
						var traceData = response.ProviderResponses[8].Trace.response.trace_data.employment_history;
							for (var i = 0; i < traceData.length; i++) {
							 
								var employer = traceData[i].EmpName;
								var occupation = traceData[i].Occupation; 
								var dateAddedEmp = traceData[i].CreatedDate;
								var lastUpdateEmp = traceData[i].LastUpdated; 

								if (!employer || employer == '') {
									employer = 'UNKNOWN';
								}
								if (!occupation || occupation == '') {
									occupation = 'UNKNOWN';
								}
								if (!dateAddedEmp || dateAddedEmp == '') {
									dateAddedEmp = 'UNKNOWN';
								}
								if (!lastUpdateEmp || lastUpdateEmp == '') {
									lastUpdateEmp = 'UNKNOWN';
								}								
								$("#EM1").append('<div class="row">' + 
										'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
										'		<p><ok>Employer Name: </ok></br>' + employer + '</p>' +	
										'		<p><ok>Occupation: </ok></br>' + occupation + '</p>' +								
										'	</div>' +
										'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
										'		<p style="color:#9cc3b7 !important;"> Date Added: <ok></br>' + dateAddedEmp + '</ok></p>' + 
										'		<p style="color:#9cc3b7 !important;"> Last Updated: <ok></br>' + lastUpdateEmp + '</ok></p>' + 										
										'	</div>' + 
										'</div>' )									
									}
					}			
				}			
			}			
		}			
	}
	  

	if (response.ProviderResponses[1].RiskAndCompliance) {
		  if (response.ProviderResponses[1].RiskAndCompliance.indexOf('No Matches')) {
			if (response.ProviderResponses[1].RiskAndCompliance[0]) {
				if (response.ProviderResponses[1].RiskAndCompliance[0][0]) {
					var RRActiveStatus= response.ProviderResponses[1].RiskAndCompliance[0][0].ActiveStatus;
					var RRFirstname = response.ProviderResponses[1].RiskAndCompliance[0][0].FirstName;
					var RRMiddlename = response.ProviderResponses[1].RiskAndCompliance[0][0].MiddleName;
					var RRSurname = response.ProviderResponses[1].RiskAndCompliance[0][0].Surname;
					var RRMaidenName = response.ProviderResponses[1].RiskAndCompliance[0][0].MaideName;
					var RRDateType = response.ProviderResponses[1].RiskAndCompliance[0][0].DateType;
					var RRDateYear = response.ProviderResponses[1].RiskAndCompliance[0][0].DateYear;
					var RRDateMonth = response.ProviderResponses[1].RiskAndCompliance[0][0].DateMonth;
					var RRDateDay = response.ProviderResponses[1].RiskAndCompliance[0][0].DateDay;
					var RRGender = response.ProviderResponses[1].RiskAndCompliance[0][0].Gender;
					var RRDeceased = response.ProviderResponses[1].RiskAndCompliance[0][0].Deceased;
					var RRDesc1 = response.ProviderResponses[1].RiskAndCompliance[0][0].Description1Name;
					var RRDesc2 = response.ProviderResponses[1].RiskAndCompliance[0][0].Description2Name;
					var RRDesc3 = response.ProviderResponses[1].RiskAndCompliance[0][0].Description3Name;
					var RRCountryName = response.ProviderResponses[1].RiskAndCompliance[0][0].CountryName[0];
					var RRCountyCodeVal = response.ProviderResponses[1].RiskAndCompliance[0][0].CountryValueCode[0]; 
	 
					if (!RRActiveStatus) {
						RRActiveStatus = 'INACTIVE';
					}
					if (!RRFirstname) {
						RRFirstname = 'NOT AVAILABLE';
					}
					if (!RRMiddlename) {
						RRMiddlename = 'NOT AVAILABLE';
					}
					if (!RRSurname) {
						RRSurname = 'NOT AVAILABLE';
					}
					if (!RRMaidenName) {
						RRMaidenName = 'NOT AVAILABLE';
					}
					if (!RRGender) {
						RRGender = 'NOT AVAILABLE';
					}
					if (!RRDeceased) {
						RRDeceased = 'NOT AVAILABLE';
					}
					if (!RRCountryName) {
						RRCountryName = 'NOT AVAILABLE';
					}
					if (!RRDateType) {
						RRDateType = 'NOT AVAILABLE';
					}
					if (!RRDateYear) {
						RRDateYear = 'NOT AVAILABLE';
					}
					if (!RRDateMonth) {
						RRDateMonth = 'NOT AVAILABLE';
					}
					if (!RRDateDay) {
						RRDateDay = 'NOT AVAILABLE';
					}
					if (!RRDesc1) {
						RRDesc1 = 'NOT AVAILABLE';
					}
					if (!RRDesc2) {
						RRDesc2 = 'NOT AVAILABLE';
					}
					if (!RRDesc3) {
						RRDesc3 = 'NOT AVAILABLE';
					}
					if (!RRCountyCodeVal) {
						RRCountyCodeVal = 'NOT AVAILABLE';
					}
																																																												
					var strRR = 		'<div class="row">' +
										'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' +
										'		<p><ok>Active Status: </ok></br><span id="RISK1"><fail>' + RRActiveStatus.toUpperCase() + '</fail></span></p>' +
										'		<p><ok>First Name: </ok></br><span id="RISK2">' + RRFirstname + '</span></p>' +
										'		<p><ok>Middle Name: </ok></br><span id="RISK3">' + RRMiddlename + '</span></p>' +
										'		<p><ok>Surname: </ok></br><span id="RISK4">' + RRSurname + '</span></p>' +
										'		<p><ok>Maiden Name: </ok></br><span id="RISK5">' + RRMaidenName + '</span></p>' +
										'		<p><ok>Gender: </ok></br><span id="RISK6">' + RRGender + '</span></p>' +
										'		<p><ok>Deceased: </ok></br><span id="RISK7">' + RRDeceased + '</span></p>' +
										'		<p><ok>Country Name: </ok></br><span id="RISK8">' + RRCountryName + '</span></p>' +
										'	</div>' +
										'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' +
										'		<p><ok>Date Type: </ok></br><span id="RISK9">' + RRDateType + '</span></p>' +
										'		<p><ok>Date Year: </ok></br><span id="RISK10">' + RRDateYear + '</span></p>' +
										'		<p><ok>Date Month: </ok></br><span id="RISK11">' + RRDateMonth + '</span></p>' +
										'		<p><ok>Date Day: </ok></br><span id="RISK12">' + RRDateDay + '</span></p>' +
										'		<p><ok>Description 1: </ok></br><span id="RISK13">' + RRDesc1 + '</span></p>' +
										'		<p><ok>Description 2: </ok></br><span id="RISK14">' + RRDesc2 + '</span></p>' +
										'		<p><ok>Description 3: </ok></br><span id="RISK15">' + RRDesc3 + '</span></p>' +
										'		<p><ok>Country Code: </ok></br><span id="RISK16">' + RRCountyCodeVal + '</span></p>' +
										'	</div>' +
										'</div>' 
					$("#RR1").append(strRR)
					
		
				} else {
					var strRR = 		'<div class="row">' +
										'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' +
										'		<p><ok>Active Status: </ok></br><span id="RISK1"><pass>No Matches</pass></span></p>'
										'	</div>' 
					$("#RR1").append(strRR)
				}
				
			} else {
					var strRR = 		'<div class="row">' +
										'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' +
										'		<p><ok>Active Status: </ok></br><span id="RISK1"><pass>No Matches</pass></span></p>'
										'	</div>' 
					$("#RR1").append(strRR)			
			}
			}else {
					var strRR = 		'<div class="row">' +
										'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' +
										'		<p><ok>Active Status: </ok></br><span id="RISK1"><pass>No Matches</pass></span></p>'
										'	</div>' 
					$("#RR1").append(strRR)			
			}
 
	}else {
				var strRR = 		'<div class="row">' +
									'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' +
									'		<p><ok>Active Status: </ok></br><span id="RISK1"><pass>No Matches</pass></span></p>'
									'	</div>' 
				$("#RR1").append(strRR)		
	}
	

	if (response.ProviderResponses[9]) {
		if (response.ProviderResponses[9].AdverseMedia) {
			if (response.ProviderResponses[9].AdverseMedia.Articles) {
				 
					var advArt = response.ProviderResponses[9].AdverseMedia.Articles;
					var advScore = response.ProviderResponses[9].AdverseMedia;
					var finRes = ''; 
					
					if (advScore.SentimentAggregateScore < 0.5) {
						finRes = '<fail>NEGATIVE</fail>'
					}
					if (advScore.SentimentAggregateScore < 0.6 && advScore.SentimentAggregateScore > 0.5) {
						finRes = '<fail style="color: #e5ab4f !important;">NEUTRAL</fail>'
					}
					if (advScore.SentimentAggregateScore > 0.6) {
						finRes = '<pass>POSITIVE</pass>'
					}	

						var strNoRes = 	'<div class="row" id="articID">' +
										'	<div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">' +
										'		<p><ok>Sentiment Result: </ok></br><span id="ADV2">' +  finRes + '</span></p>' +
										'		<p><ok>Sentiment Aggregate Score: </ok></br><span id="ADV3">' + advScore.SentimentAggregateScore + '</span></p>' +
										'		<p><ok>Number of Articles Analysed: </ok></br><span id="ADV4">' + advArt.length + '</span></p>' +
										'	</div>' +
										'</div>';
						$("#ADV1").append(strNoRes);				
										
					for (var i = 0; i < advArt.length; i++) {
						
						var strArt =	'	<div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">' +
										'		<p><ok>Article Snippet: </ok></br><span id="ADV6">' + advArt[i].snippet + '</span></p>' +
										' 		<p><ok>Article Link: </ok></br>' + advArt[i].link + '</p>' +
										'	</div>' +
										'</div>'
					$("#articID").append(strArt);						
						
					}
					


			
			} else {
				
			}			
		} else {
			
		}		
	} else {
		
	}
	   console.log('All loaded - QuickReport')
  
	} else {
		$("#IR2").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}
 } 

});

function AjaxReturn () {
 if (response) {
	if (response.StagedData && response.StagedData.results && response.ProviderResponses) {
 
	  //Result
	  if (response.RiskMatrixResult) {
		if (response.RiskMatrixResult=='PASS') {
		  $("#resultID").html('Result: <pass style="font-size: 15px !important;">'+response.RiskMatrixResult+'</pass>')
		
		} else{
		  $("#resultID").html('Result: <fail>'+response.RiskMatrixResult+'</fail>')
		} 	  
	  } else {
		 $("#resultID").html('Result: <fail style="color: #e5ab4f !important;">RESULT NOT AVAILABLE</fail>') 
	  }
	   //Score
	  if (response.RiskMatrixScore) {
			$("#scoreID").html(response.RiskMatrixScore) 
	  } else {
		 $("#scoreID").html('<fail style="color: #e5ab4f !important;">SCORE NOT AVAILABLE</fail>') 
	  }
		  
	   //Threshold
	  if (response.RiskThreshold) {
			 $("#thresholdID").html(response.RiskThreshold) 
	  } else {
		 $("#thresholdID").html('<fail style="color: #e5ab4f !important;">THRESHOLD NOT AVAILABLE</fail>') 
	  }
	  
	  //Failed Reasons List 
	  if (response.RiskScoreFailReasons) {
		  
		  for (var i = 0; i < response.RiskScoreFailReasons.length; i++) {
		   $("#listFailure").append('<li>' + response.RiskScoreFailReasons[i] + '</li>'  );
		  }	  
	  } else {
			$("#listFailure").append('<li><fail style="color: #e5ab4f !important;">NO FAILURE REASONS FOUND</fail></li>'  );  
	  }

	   //Passed Reasons List  
	  if (response.RiskScorePassReasons) {
		  
		  for (var i = 0; i < response.RiskScorePassReasons.length; i++) {
		   $("#listPassed").append('<li>' + response.RiskScorePassReasons[i] + '</li>'  );
		  }
	  } else {
			$("#listPassed").append('<li><fail style="color: #e5ab4f !important;">NO PASSED REASONS FOUND</fail></li>'  );  
	  }
 
  //Provided Information
  
	  //Matrix Results for Person 
	if (response.StagedData.results[0].first_name && response.StagedData.results[0].last_name) {
	  var reportForPerson = response.StagedData.results[0].first_name + ' ' + response.StagedData.results[0].last_name;
	  reportForPerson = reportForPerson.toUpperCase();
	  $("#MatrixID").html('');
	  $("#MatrixID").append('<strong style="color:#bdbdbd !important;">' + reportForPerson + '<strong>')		
	} else {
		$("#MatrixID").html('');
		$("#MatrixID").append('<strong style="color: #e5ab4f !important;">NO PERSON NAME FOUND</strong>')	
	}		  
	  
    if (response.StagedData.results[0].identity_number){ 
		$("#sInit").html(response.StagedData.results[0].identity_number)
	} 
	if (response.StagedData.results[0].title) {
		$("#sTit").html(response.StagedData.results[0].title)
	}
	if (response.StagedData.results[0].title) {
		$("#sTit").html(response.StagedData.results[0].title)
	}
	if (response.StagedData.results[0].first_name) {
		$("#sFnN").html(response.StagedData.results[0].first_name)	
	}
	if (response.StagedData.results[0].middle_name) {
		$("#sMname").html(response.StagedData.results[0].middle_name)
	}
	if (response.StagedData.results[0].last_name) {
		$("#sLnam").html(response.StagedData.results[0].last_name)
	}
	if (response.StagedData.results[0].date_of_birth) {
		$("#sDateob").html(response.StagedData.results[0].date_of_birth)
	}
	if (response.StagedData.results[0].citizenship) {
		$("#sCit").html(response.StagedData.results[0].citizenship)
	}
	if (response.StagedData.results[0].gender) {
		$("#sGbe").html(response.StagedData.results[0].gender)
	}
	if (response.StagedData.results[0].bank_account_number) {
		$("#sBAcc").html(response.StagedData.results[0].bank_account_number)
	}
	if (response.StagedData.results[0].bank_branch_code) {
		$("#sBCode").html(response.StagedData.results[0].bank_branch_code)
	}
	if (response.StagedData.results[0].bank_account_type) {
		$("#sBAType").html(response.StagedData.results[0].bank_account_type)
	}
	if (response.StagedData.results[0].StreetNoOrUnitNo) {
		$("#sSNo").html(response.StagedData.results[0].StreetNoOrUnitNo)
	}
	if (response.StagedData.results[0].StreetName) {
		$("#sSName").html(response.StagedData.results[0].StreetName)
	}
	if (response.StagedData.results[0].LocalityOrCity) {
		$("#sCity").html(response.StagedData.results[0].LocalityOrCity)
	}	
	if (response.StagedData.results[0].addressCountry) {
		$("#sCoun").html(response.StagedData.results[0].addressCountry)
	}	
	if (response.StagedData.results[0].addressPostalCode) {
		$("#sPos").html(response.StagedData.results[0].addressPostalCode)
	}	
	if (response.StagedData.results[0].email_address) {
		$("#sEMAILa").html(response.StagedData.results[0].email_address)
	}	
	if (response.StagedData.results[0].mobileNo) {
		$("#sCell").html(response.StagedData.results[0].mobileNo)
	}	
	if (response.StagedData.results[0].telephoneNo) {
		$("#sTella").html(response.StagedData.results[0].telephoneNo)
	}	
	if (response.StagedData.results[0].datestamp) {
		$("#sddAa").html(response.StagedData.results[0].datestamp.substring(0, 10))
	}

	//Identification Results -- Comparison to stage and other
	if (response.StagedData.results[0].identity_number && 
			response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_number) {
				if (response.StagedData.results[0].identity_number == 
					response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_number) {
					$("#IR2").html('<pass>ID NUMBER MATCHES HOME AFFAIRS</pass>')
				} else {
					$("#IR2").html('<fail>ID NUMBER DOES NOT MATCH HOME AFFAIRS</fail>')
				};

 
	if (response.StagedData.results[0].first_name && 
			response.StagedData.results[0].middle_name && 
				response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].firstnames) {
					var receivedFullName =  response.StagedData.results[0].first_name + ' ' + response.StagedData.results[0].middle_name;
					receivedFullName = receivedFullName.toUpperCase();
					receivedFullName = receivedFullName.trim();
			
					if (receivedFullName == response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].firstnames.toUpperCase()) {
						$("#IR3").html('<pass>FULL NAME MATCHES HOME AFFAIRS</pass>')
					} else {
						$("#IR3").html('<fail>FULL NAME DOES NOT MATCH HOME AFFAIRS</fail>')
					} 
	} else {
		$("#IR3").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}

	if (response.StagedData.results[0].first_name && 
			response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].first_name) {
				if (response.StagedData.results[0].first_name.toUpperCase() == response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].first_name.toUpperCase()) {
					$("#IR4").html('<pass>FIRST NAME MATCHES HOME AFFAIRS</pass>')
				} else {
					$("#IR4").html('<fail>FIRST NAME DOES NOT MATCH HOME AFFAIRS</fail>')
				}
	} else {
		$("#IR4").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}
 
	if (response.StagedData.results[0].middle_name && 
			response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].second_names) {
				if (response.StagedData.results[0].middle_name.toUpperCase() == response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].second_names.toUpperCase()) {
					$("#IR5").html('<pass>SECOND NAME MATCHES HOME AFFAIRS</pass>')
				} else {
					$("#IR5").html('<fail>SECOND NAME DOES NOT MATCH HOME AFFAIRS</fail>')
				}
	} else {
		$("#IR5").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}
	
	if (response.StagedData.results[0].last_name && 
			response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].surname) {
				if (response.StagedData.results[0].last_name.toUpperCase() == response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].surname.toUpperCase()) {
					$("#IR6").html('<pass>LAST NAME MATCHES HOME AFFAIRS</pass>')
				} else {
					$("#IR6").html('<fail>LAST NAME DOES NOT MATCH HOME AFFAIRS</fail>')
				}
	} else {
		$("#IR6").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}
		
	if (response.StagedData.results[0].date_of_birth && 
			response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].date_of_birth) {
				if (response.StagedData.results[0].date_of_birth.toUpperCase() == 
						response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].date_of_birth.toUpperCase()) {
					$("#IR7").html('<pass>DATE OF BIRTH MATCHES HOME AFFAIRS</pass>')
				} else {
					$("#IR7").html('<fail>DATE OF BIRTH DOES NOT MATCH HOME AFFAIRS</fail>')
				}
	} else {
		$("#IR7").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}

	if (response.StagedData.results[0].gender && 
			response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].gender) {
				if (response.StagedData.results[0].gender.toUpperCase() == 
						response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].gender.toUpperCase()) {
					$("#IR8").html('<pass>GENDER MATCHES HOME AFFAIRS</pass>')
				} else {
					$("#IR8").html('<fail>GENDER DOES NOT MATCH HOME AFFAIRS</fail>')
				}
	} else {
		$("#IR8").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}
	
	if (response.StagedData.results[0].identity_number && 
			response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_number) {
				if (response.StagedData.results[0].identity_number == 
						response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_number.toUpperCase()) {
					$("#IR9").html('<pass>AGE MATCHES HOME AFFAIRS</pass>')
				} else {
					$("#IR9").html('<fail>AGE DOES NOT MATCH HOME AFFAIRS</fail>')
				}
	} else {
		$("#IR9").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}

	
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].vital_status) {
		if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].vital_status.toUpperCase() == 'ALIVE') {
			$("#IR10").html('<pass>VITAL STATUS ALIVE</pass>')
		} else {
			$("#IR10").html('<fail>VITAL STATUS DECEASED</fail>')
		}
	} else {
		$("#IR10").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}
	
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_type) {
		if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_type.toUpperCase() == 'ID' || 
			response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_type.toUpperCase() =='LICENSE' || 
				response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_type.toUpperCase() == 'PASSPORT') {
			$("#IR11").html('<pass>VALID IDENTIFICATION TYPE</pass>')
		} else {
			$("#IR11").html('<fail>INVALID IDENTIFICATION TYPE</fail>')
		}
	} else {
		$("#IR11").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}	
 
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].issuing_country) {
		if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].issuing_country.toUpperCase() == 'ZA') {
			$("#IR12").html('<pass>ISSUING COUNTRY VALID FOR CITIZEN</pass>')
		} else {
			$("#IR12").html('<fail>ISSUING COUNTRY INVALID FOR CITIZEN</fail>')
		}	
	} else {
		$("#IR12").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}	
	
	if (response.StagedData.results[0].citizenship && 
			response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].citizenship) {
			if (response.StagedData.results[0].citizenship.toUpperCase() == 
					response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].citizenship.toUpperCase()) {
				$("#IR14").html('<pass>CITIZENSHIP MATCHES HOME AFFAIRS</pass>')
			} else {
				$("#IR14").html('<fail>CITIZENSHIP DOES NOT MATCH HOME AFFAIRS</fail>')
			}
	} else {
		$("#IR14").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}
	
  } else {
	  $("#stagedDataID").html('<ok style="color: #d96965 !important;">NO INFORMATION PROVIDED TO VERIFY</ok>')
  }
	
	

	//Identification Results
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_number) {
		$("#IR_IDNo").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_number)
	} else {
		$("#IR_IDNo").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].firstnames) {
		$("#IR_FULL").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].firstnames)
	} else {
		$("#IR_FULL").html('NOT AVAILABLE')
	}	
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].first_name) {
		$("#IR_FN").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].first_name)
	} else {
		$("#IR_FN").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].second_names) {
		$("#IR_SECN").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].second_names)
	} else {
		$("#IR_SECN").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].surname) {
		$("#IR_LN").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].surname)
	} else {
		$("#IR_LN").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].date_of_birth) {
		$("#IR_DOB").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].date_of_birth)
	} else {
		$("#IR_DOB").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].gender) {
		$("#IR_GEN").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].gender)
	} else {
		$("#IR_GEN").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].age) {
		$("#IR_AGE").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].age)		
	} else {
		$("#IR_AGE").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].vital_status) {
		$("#IR_VIT").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].vital_status)
	} else {
		$("#IR_VIT").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_type) {
		$("#IR_IDT").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].identity_type)
	} else {
		$("#IR_IDT").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].issuing_country) {
		$("#IR_ISC").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].issuing_country)
	} else {
		$("#IR_ISC").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].country_code) {
		$("#IR_CC").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].country_code)
	} else {
		$("#IR_CC").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].citizenship) {
		$("#IR_CIT").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].citizenship)
	} else {
		$("#IR_CIT").html('NOT AVAILABLE')
	}
	if (response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].last_update) {
		$("#IR_LUP").html(response.ProviderResponses[0].Identity.response.data.report_data.identity_data[0].last_update.substring(0, 10))
	} else {
		$("#IR_LUP").html('NOT AVAILABLE')
	}
 
 
	//Bank Verification 
if 	(response.ProviderResponses[7].Bank.status != 'ERROR') {	
	if (response.ProviderResponses[7].Bank.response.avs_response[0]['ACCOUNT EXISTS AND OPEN']) {
		 $("#BV1").html('<pass>YES</pass>')
	} else {
		 $("#BV1").html('<fail>NO</fail>')
	}
	if (response.ProviderResponses[7].Bank.response.avs_response[1]['ID MATCH TO ACCOUNT OWNER']) {
		 $("#BV2").html('<pass>YES</pass>')
	} else {
		 $("#BV2").html('<fail>NO</fail>')
	}
	if (response.ProviderResponses[7].Bank.response.avs_response[2]['INITIALS MATCH']) {
		 $("#BV3").html('<pass>YES</pass>')
	} else {
				
		 $("#BV3").html('<fail>NO</fail>')
	}
	if (response.ProviderResponses[7].Bank.response.avs_response[3]['LAST NAME MATCH']) {
		 $("#BV4").html('<pass>YES</pass>')
	} else {
		 $("#BV4").html('<fail>NO</fail>')
	}
	if (response.ProviderResponses[7].Bank.response.avs_response[4]['ACCOUNT TYPE MATCH']) {
		 $("#BV5").html('<pass>YES</pass>')
	} else {
		 $("#BV5").html('<fail>NO</fail>')
	}
	if (response.ProviderResponses[7].Bank.response.avs_response[5]['ACCOUNT ACCEPTS DEBITS']) {
		 $("#BV6").html('<pass>YES</pass>')
	} else {
		 $("#BV6").html('<fail>NO</fail>')
	}
	if (response.ProviderResponses[7].Bank.response.avs_response[6]['ACCOUNT ACCEPTS CREDITS']) {
		 $("#BV7").html('<pass>YES</pass>')
	} else {
		 $("#BV7").html('<fail>NO</fail>')
	}
	if (response.ProviderResponses[7].Bank.response.avs_response[7]['ACCOUNT OPEN > 3 MONTHS']) {
		 $("#BV8").html('<pass>YES</pass>') 
	} else {
		 $("#BV8").html('<fail>NO</fail>')
	}
}  else {
	$("#BV1").html('<fail>BANK VERIFICATION CURRENTLY UNAVAILABLE</fail>')
}            
	  //Address Listings -- AIzaSyB3INox5nNkmpOSxdC71iftMjDn-2X3tBY
	  
 
	  if (response.ProviderResponses[0].Identity.response.data.report_data.address_data) {
	  var addressData = response.ProviderResponses[0].Identity.response.data.report_data.address_data;
		  for (var i = 0; i < addressData.length; i++) {
			if (addressData[i].normalised_address) {
			var strInject = '</br><div class="row">' + 
							'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
							'		<p>' + addressData[i].normalised_address + '<ok></br> Coordinates: Lat: ' + 
							addressData[i].Geometry.location.lat + ' Lon: ' +addressData[i].Geometry.location.lng + '</ok></p>' +
							'	</div>' +
							'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
							'		<p style="color:#9cc3b7 !important;"> Last Updated: <ok></br>' + addressData[i].last_update.substring(0, 10) + '</ok></p>' + 
							'	</div>' + 
							'</div>' 	
			
			var strInjectMap = '<hr><div class="row">' + 
							'	<div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">' + 
							'    <div style="float: left;height: 350px;width: 100%;" id="map'+ i +'"></div>'+
							'	</div>'+
							'	</div><hr>'	
			var strInjectPan = 	'<div class="row">' + 
							'	<div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">' + 
							'	<div style="float: left;height: 350px;width: 100%;" id="pano'+ i +'"></div>'+
							'	</div>'+
							'</div>'
		   						
			  }
 
			$("#AL1").append(strInject + strInjectMap);

			var newMap = 'map' + i;
			var newLat = addressData[i].Geometry.location.lat;
			var newLon = addressData[i].Geometry.location.lng;
			var mapLoc = {lat: newLat, lng: newLon};
			var map = new google.maps.Map(document.getElementById(newMap), {
						center: mapLoc,
						zoom: 18,
						mapTypeId: 'satellite',
						scrollwheel: false,
						navigationControl: false,
						mapTypeControl: false,
						scaleControl: false,
						draggable: false
			});
			var marker = new google.maps.Marker({
				position: mapLoc,
				map: map
			});
 
		  }		  
	  } else {
		   $("#AL1").append('<div class="row">' + 
							'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
							'		<p>NO ADDRESS LISTINGS AVAILABLE</p>' +
							'	</div>' +
							'</div>' )				  
	  }
	  //Contact Details
 
 
	  if (response.ProviderResponses[2].MobileNumberLookup) { 
		  if (response.ProviderResponses[2].MobileNumberLookup.NumberSearched && response.ProviderResponses[2].MobileNumberLookup.Result) {
						$("#CD1").append('</br><div class="row">' + 
								'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
								'		<p><ok>Mobile Number Searched: </ok></br>' + response.ProviderResponses[2].MobileNumberLookup.NumberSearched + 
								'</p>' +
								'	</div>' +
								'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
								'		<p style="color:#9cc3b7 !important;"> Last Known Owner: <ok></br>' + response.ProviderResponses[2].MobileNumberLookup.Result + '</ok></p>' + 
								'	</div>' + 
								'</div>' )		  
		  } 
	  }
	  if (response.ProviderResponses[3].TelephoneNumberLookup) {
		  if (response.ProviderResponses[3].TelephoneNumberLookup.NumberSearched && response.ProviderResponses[3].TelephoneNumberLookup.Result) {
						$("#CD1").append('<div class="row">' + 
								'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
								'		<p><ok>Telephone Number Searched: </ok></br>' + response.ProviderResponses[3].TelephoneNumberLookup.NumberSearched + 
								'</p>' +
								'	</div>' +
								'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
								'		<p style="color:#9cc3b7 !important;"> Last Known Owner: <ok></br>' + response.ProviderResponses[3].TelephoneNumberLookup.Result + '</ok></p>' + 
								'	</div>' + 
								'</div>' )		  
		  }
	  }
 
	  if (response.ProviderResponses[0].Identity.response.data.report_data.contact_data) {
	  var contactData = response.ProviderResponses[0].Identity.response.data.report_data.contact_data;
		  if (contactData.email_address) {
		  for (var i = 0; i < contactData.email_address.length; i++) {
			if (contactData.email_address[i].email_address) {
					$("#CD1").append('<div class="row">' + 
							'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
							'		<p><ok>Email Address: </ok></br>' + contactData.email_address[i].email_address + 
							'</p>' +
							'	</div>' +
							'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
							'		<p style="color:#9cc3b7 !important;"> Last Updated: <ok></br>' + contactData.email_address[i].last_update.substring(0, 10) + '</ok></p>' + 
							'	</div>' + 
							'</div>' )							
			  }
			}	
		  }
		  if (contactData.mobile_number) {
			for (var i1 = 0; i1 < contactData.mobile_number.length; i1++) {
				if (contactData.mobile_number[i1].number) {
					
					$("#CD1").append('<div class="row">' + 
							'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
							'		<p><ok>' + contactData.mobile_number[i1].number_type + ': </ok></br>' + contactData.mobile_number[i1].number + 
							'</p>' +
							'	</div>' +
							'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
							'		<p style="color:#9cc3b7 !important;"> Last Updated: <ok></br>' + contactData.mobile_number[i1].last_update.substring(0, 10) + '</ok></p>' + 
							'	</div>' + 
							'</div>' )							
				}
			}	
		  }		  
	  } else {
		   $("#CD1").append('<div class="row">' + 
							'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
							'		<p>NO CONTACT DETAILS AVAILABLE</p>' +
							'	</div>' +
							'</div>' )				  
	  }
	  if (response.ProviderResponses[4].EmailCompromised) {
		  var emailComp = response.ProviderResponses[4].EmailCompromised; 
		  emailComp = JSON.parse(emailComp); 
		  for (var i = 0; i < emailComp.length; i++) {
 						$("#CD1").append('<div class="row">' + 
								'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
								'		<p><ok>Email Compromised: </ok></br><fail>YES</fail></p>' +
								'		<p><ok>Title of Breach: </ok></br>' + emailComp[i].Title + '</p>' +	
								'		<p><ok>Breach Date: </ok></br>' + emailComp[i].BreachDate.substring(0, 10) + '</p>' +	
								'		<p><ok>Added Date: </ok></br>' + emailComp[i].AddedDate.substring(0, 10) + '</p>' +								
								'	</div>' +
								'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
								'		<p style="color:#9cc3b7 !important;"> Description of Breach: <ok></br>' + emailComp[i].Description + '</ok></p>' + 
								'	</div>' + 
								'</div>' )	   
		  }
	  }
  //Employment Details
	if (response.ProviderResponses[8]){
		if (response.ProviderResponses[8].Trace){
			if (response.ProviderResponses[8].Trace.response){
				if (response.ProviderResponses[8].Trace.response.trace_data){
					if (response.ProviderResponses[8].Trace.response.trace_data.employment_history){
						var traceData = response.ProviderResponses[8].Trace.response.trace_data.employment_history;
							for (var i = 0; i < traceData.length; i++) {
							 
								var employer = traceData[i].EmpName;
								var occupation = traceData[i].Occupation; 
								var dateAddedEmp = traceData[i].CreatedDate;
								var lastUpdateEmp = traceData[i].LastUpdated; 

								if (!employer || employer == '') {
									employer = 'UNKNOWN';
								}
								if (!occupation || occupation == '') {
									occupation = 'UNKNOWN';
								}
								if (!dateAddedEmp || dateAddedEmp == '') {
									dateAddedEmp = 'UNKNOWN';
								}
								if (!lastUpdateEmp || lastUpdateEmp == '') {
									lastUpdateEmp = 'UNKNOWN';
								}								
								$("#EM1").append('<div class="row">' + 
										'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
										'		<p><ok>Employer Name: </ok></br>' + employer + '</p>' +	
										'		<p><ok>Occupation: </ok></br>' + occupation + '</p>' +								
										'	</div>' +
										'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' + 
										'		<p style="color:#9cc3b7 !important;"> Date Added: <ok></br>' + dateAddedEmp + '</ok></p>' + 
										'		<p style="color:#9cc3b7 !important;"> Last Updated: <ok></br>' + lastUpdateEmp + '</ok></p>' + 										
										'	</div>' + 
										'</div>' )									
									}
					}			
				}			
			}			
		}			
	}
	  

	if (response.ProviderResponses[1].RiskAndCompliance) {
		  if (response.ProviderResponses[1].RiskAndCompliance.indexOf('No Matches')) {
			if (response.ProviderResponses[1].RiskAndCompliance[0]) {
				if (response.ProviderResponses[1].RiskAndCompliance[0][0]) {
					var RRActiveStatus= response.ProviderResponses[1].RiskAndCompliance[0][0].ActiveStatus;
					var RRFirstname = response.ProviderResponses[1].RiskAndCompliance[0][0].FirstName;
					var RRMiddlename = response.ProviderResponses[1].RiskAndCompliance[0][0].MiddleName;
					var RRSurname = response.ProviderResponses[1].RiskAndCompliance[0][0].Surname;
					var RRMaidenName = response.ProviderResponses[1].RiskAndCompliance[0][0].MaideName;
					var RRDateType = response.ProviderResponses[1].RiskAndCompliance[0][0].DateType;
					var RRDateYear = response.ProviderResponses[1].RiskAndCompliance[0][0].DateYear;
					var RRDateMonth = response.ProviderResponses[1].RiskAndCompliance[0][0].DateMonth;
					var RRDateDay = response.ProviderResponses[1].RiskAndCompliance[0][0].DateDay;
					var RRGender = response.ProviderResponses[1].RiskAndCompliance[0][0].Gender;
					var RRDeceased = response.ProviderResponses[1].RiskAndCompliance[0][0].Deceased;
					var RRDesc1 = response.ProviderResponses[1].RiskAndCompliance[0][0].Description1Name;
					var RRDesc2 = response.ProviderResponses[1].RiskAndCompliance[0][0].Description2Name;
					var RRDesc3 = response.ProviderResponses[1].RiskAndCompliance[0][0].Description3Name;
					var RRCountryName;
					if (response.ProviderResponses[1].RiskAndCompliance[0][0].CountryName){
						RRCountryName = response.ProviderResponses[1].RiskAndCompliance[0][0].CountryName[0];
					}else {
						RRCountryName = 'NOT AVAILABLE';
					}
					var RRCountyCodeVal;
					if (response.ProviderResponses[1].RiskAndCompliance[0][0].CountryValueCode){
						RRCountyCodeVal = response.ProviderResponses[1].RiskAndCompliance[0][0].CountryValueCode[0]; 
					}else {
						RRCountyCodeVal = 'NOT AVAILABLE';
					}
				 
					if (!RRActiveStatus) {
						RRActiveStatus = 'INACTIVE';
					}
					if (!RRFirstname) {
						RRFirstname = 'NOT AVAILABLE';
					}
					if (!RRMiddlename) {
						RRMiddlename = 'NOT AVAILABLE';
					}
					if (!RRSurname) {
						RRSurname = 'NOT AVAILABLE';
					}
					if (!RRMaidenName) {
						RRMaidenName = 'NOT AVAILABLE';
					}
					if (!RRGender) {
						RRGender = 'NOT AVAILABLE';
					}
					if (!RRDeceased) {
						RRDeceased = 'NOT AVAILABLE';
					}
					if (!RRCountryName) {
						RRCountryName = 'NOT AVAILABLE';
					}
					if (!RRDateType) {
						RRDateType = 'NOT AVAILABLE';
					}
					if (!RRDateYear) {
						RRDateYear = 'NOT AVAILABLE';
					}
					if (!RRDateMonth) {
						RRDateMonth = 'NOT AVAILABLE';
					}
					if (!RRDateDay) {
						RRDateDay = 'NOT AVAILABLE';
					}
					if (!RRDesc1) {
						RRDesc1 = 'NOT AVAILABLE';
					}
					if (!RRDesc2) {
						RRDesc2 = 'NOT AVAILABLE';
					}
					if (!RRDesc3) {
						RRDesc3 = 'NOT AVAILABLE';
					}
					if (!RRCountyCodeVal) {
						RRCountyCodeVal = 'NOT AVAILABLE';
					}
																																																												
					var strRR = 		'<div class="row">' +
										'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' +
										'		<p><ok>Active Status: </ok></br><span id="RISK1"><fail>' + RRActiveStatus.toUpperCase() + '</fail></span></p>' +
										'		<p><ok>First Name: </ok></br><span id="RISK2">' + RRFirstname + '</span></p>' +
										'		<p><ok>Middle Name: </ok></br><span id="RISK3">' + RRMiddlename + '</span></p>' +
										'		<p><ok>Surname: </ok></br><span id="RISK4">' + RRSurname + '</span></p>' +
										'		<p><ok>Maiden Name: </ok></br><span id="RISK5">' + RRMaidenName + '</span></p>' +
										'		<p><ok>Gender: </ok></br><span id="RISK6">' + RRGender + '</span></p>' +
										'		<p><ok>Deceased: </ok></br><span id="RISK7">' + RRDeceased + '</span></p>' +
										'		<p><ok>Country Name: </ok></br><span id="RISK8">' + RRCountryName + '</span></p>' +
										'	</div>' +
										'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' +
										'		<p><ok>Date Type: </ok></br><span id="RISK9">' + RRDateType + '</span></p>' +
										'		<p><ok>Date Year: </ok></br><span id="RISK10">' + RRDateYear + '</span></p>' +
										'		<p><ok>Date Month: </ok></br><span id="RISK11">' + RRDateMonth + '</span></p>' +
										'		<p><ok>Date Day: </ok></br><span id="RISK12">' + RRDateDay + '</span></p>' +
										'		<p><ok>Description 1: </ok></br><span id="RISK13">' + RRDesc1 + '</span></p>' +
										'		<p><ok>Description 2: </ok></br><span id="RISK14">' + RRDesc2 + '</span></p>' +
										'		<p><ok>Description 3: </ok></br><span id="RISK15">' + RRDesc3 + '</span></p>' +
										'		<p><ok>Country Code: </ok></br><span id="RISK16">' + RRCountyCodeVal + '</span></p>' +
										'	</div>' +
										'</div>' 
					$("#RR1").append(strRR)
					
		
				} else {
					var strRR = 		'<div class="row">' +
										'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' +
										'		<p><ok>Active Status: </ok></br><span id="RISK1"><pass>No Matches</pass></span></p>'
										'	</div>' 
					$("#RR1").append(strRR)
				}
				
			} else {
					var strRR = 		'<div class="row">' +
										'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' +
										'		<p><ok>Active Status: </ok></br><span id="RISK1"><pass>No Matches</pass></span></p>'
										'	</div>' 
					$("#RR1").append(strRR)			
			}
			}else {
					var strRR = 		'<div class="row">' +
										'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' +
										'		<p><ok>Active Status: </ok></br><span id="RISK1"><pass>No Matches</pass></span></p>'
										'	</div>' 
					$("#RR1").append(strRR)			
			}
 
	}else {
				var strRR = 		'<div class="row">' +
									'	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">' +
									'		<p><ok>Active Status: </ok></br><span id="RISK1"><pass>No Matches</pass></span></p>'
									'	</div>' 
				$("#RR1").append(strRR)		
	}
	

	if (response.ProviderResponses[9]) {
		if (response.ProviderResponses[9].AdverseMedia) {
			if (response.ProviderResponses[9].AdverseMedia.Articles) {
				 
					var advArt = response.ProviderResponses[9].AdverseMedia.Articles;
					var advScore = response.ProviderResponses[9].AdverseMedia;
					var finRes = ''; 
					
					if (advScore.SentimentAggregateScore < 0.5) {
						finRes = '<fail>NEGATIVE</fail>'
					}
					if (advScore.SentimentAggregateScore < 0.6 && advScore.SentimentAggregateScore > 0.5) {
						finRes = '<fail style="color: #e5ab4f !important;">NEUTRAL</fail>'
					}
					if (advScore.SentimentAggregateScore > 0.6) {
						finRes = '<pass>POSITIVE</pass>'
					}	

						var strNoRes = 	'<div class="row" id="articID">' +
										'	<div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">' +
										'		<p><ok>Sentiment Result: </ok></br><span id="ADV2">' +  finRes + '</span></p>' +
										'		<p><ok>Sentiment Aggregate Score: </ok></br><span id="ADV3">' + advScore.SentimentAggregateScore + '</span></p>' +
										'		<p><ok>Number of Articles Analysed: </ok></br><span id="ADV4">' + advArt.length + '</span></p>' +
										'	</div>' +
										'</div>';
						$("#ADV1").append(strNoRes);				
					if (advArt[0].snippet) {
					for (var i = 0; i < advArt.length; i++) {
						
						var strArt =	'	<div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">' +
										'		<p><ok>Article Snippet: </ok></br><span id="ADV6">' + advArt[i].snippet + '</span></p>' +
										' 		<p><ok>Article Link: </ok></br>' + advArt[i].link + '</p>' +
										'	</div>' +
										'</div>'
					$("#articID").append(strArt);						
						
					}}
					


			
			} else {
				
			}			
		} else {
			
		}		
	} else {
		
	}
	   console.log('All loaded - QuickReport')
  
	} else {
		$("#IR2").html('<fail style="color: #e5ab4f !important;">NO DATA AVAILABLE TO COMPARE</fail>')
	}
 } 	
}

 