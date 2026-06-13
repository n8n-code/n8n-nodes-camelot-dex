import type { INodeProperties } from 'n8n-workflow';

export const oTokenDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"O Token"
					]
				}
			},
			"options": [
				{
					"name": "Get O Token",
					"value": "Get O Token",
					"action": "Retrieve OToken data",
					"description": "Retrieve OToken data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/otoken"
						}
					}
				},
				{
					"name": "Get O Token History Rate",
					"value": "Get O Token History Rate",
					"action": "Retrieve OToken rate history data",
					"description": "Retrieve OToken rate history data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/otoken-history/rate"
						}
					}
				},
				{
					"name": "Get O Token History Conversions",
					"value": "Get O Token History Conversions",
					"action": "Retrieve OToken conversions history data",
					"description": "Retrieve OToken conversions history data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/otoken-history/conversions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /otoken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"O Token"
					],
					"operation": [
						"Get O Token"
					]
				}
			}
		},
		{
			"displayName": "GET /otoken-history/rate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"O Token"
					],
					"operation": [
						"Get O Token History Rate"
					]
				}
			}
		},
		{
			"displayName": "GET /otoken-history/conversions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"O Token"
					],
					"operation": [
						"Get O Token History Conversions"
					]
				}
			}
		},
];
