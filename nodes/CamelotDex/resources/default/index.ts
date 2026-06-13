import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Get Pools v2 History Tvl",
					"value": "Get Pools v2 History Tvl",
					"action": "Get Pools v2 History Tvl",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v2/{{$parameter[\"address\"]}}/history/tvl"
						}
					}
				},
				{
					"name": "Get Pools v2 History Volume",
					"value": "Get Pools v2 History Volume",
					"action": "Get Pools v2 History Volume",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v2/{{$parameter[\"address\"]}}/history/volume"
						}
					}
				},
				{
					"name": "Get Pools v2 History Fees",
					"value": "Get Pools v2 History Fees",
					"action": "Get Pools v2 History Fees",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v2/{{$parameter[\"address\"]}}/history/fees"
						}
					}
				},
				{
					"name": "Get Pools v2 History Txs",
					"value": "Get Pools v2 History Txs",
					"action": "Get Pools v2 History Txs",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v2/{{$parameter[\"address\"]}}/history/txs"
						}
					}
				},
				{
					"name": "Get Pools v2 History Price",
					"value": "Get Pools v2 History Price",
					"action": "Get Pools v2 History Price",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v2/{{$parameter[\"address\"]}}/history/price"
						}
					}
				},
				{
					"name": "Get Pools v3 History Tvl",
					"value": "Get Pools v3 History Tvl",
					"action": "Get Pools v3 History Tvl",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v3/{{$parameter[\"address\"]}}/history/tvl"
						}
					}
				},
				{
					"name": "Get Pools v3 History Volume",
					"value": "Get Pools v3 History Volume",
					"action": "Get Pools v3 History Volume",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v3/{{$parameter[\"address\"]}}/history/volume"
						}
					}
				},
				{
					"name": "Get Pools v3 History Fees",
					"value": "Get Pools v3 History Fees",
					"action": "Get Pools v3 History Fees",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v3/{{$parameter[\"address\"]}}/history/fees"
						}
					}
				},
				{
					"name": "Get Pools v3 History Txs",
					"value": "Get Pools v3 History Txs",
					"action": "Get Pools v3 History Txs",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v3/{{$parameter[\"address\"]}}/history/txs"
						}
					}
				},
				{
					"name": "Get Pools v3 History Price",
					"value": "Get Pools v3 History Price",
					"action": "Get Pools v3 History Price",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v3/{{$parameter[\"address\"]}}/history/price"
						}
					}
				},
				{
					"name": "Get Pools v4 History Tvl",
					"value": "Get Pools v4 History Tvl",
					"action": "Get Pools v4 History Tvl",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v4/{{$parameter[\"address\"]}}/history/tvl"
						}
					}
				},
				{
					"name": "Get Pools v4 History Volume",
					"value": "Get Pools v4 History Volume",
					"action": "Get Pools v4 History Volume",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v4/{{$parameter[\"address\"]}}/history/volume"
						}
					}
				},
				{
					"name": "Get Pools v4 History Fees",
					"value": "Get Pools v4 History Fees",
					"action": "Get Pools v4 History Fees",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v4/{{$parameter[\"address\"]}}/history/fees"
						}
					}
				},
				{
					"name": "Get Pools v4 History Txs",
					"value": "Get Pools v4 History Txs",
					"action": "Get Pools v4 History Txs",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v4/{{$parameter[\"address\"]}}/history/txs"
						}
					}
				},
				{
					"name": "Get Pools v4 History Price",
					"value": "Get Pools v4 History Price",
					"action": "Get Pools v4 History Price",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v4/{{$parameter[\"address\"]}}/history/price"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pools-v2/{address}/history/tvl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pools v2 History Tvl"
					]
				}
			}
		},
		{
			"displayName": "GET /pools-v2/{address}/history/volume",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pools v2 History Volume"
					]
				}
			}
		},
		{
			"displayName": "GET /pools-v2/{address}/history/fees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pools v2 History Fees"
					]
				}
			}
		},
		{
			"displayName": "GET /pools-v2/{address}/history/txs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pools v2 History Txs"
					]
				}
			}
		},
		{
			"displayName": "GET /pools-v2/{address}/history/price",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pools v2 History Price"
					]
				}
			}
		},
		{
			"displayName": "GET /pools-v3/{address}/history/tvl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pools v3 History Tvl"
					]
				}
			}
		},
		{
			"displayName": "GET /pools-v3/{address}/history/volume",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pools v3 History Volume"
					]
				}
			}
		},
		{
			"displayName": "GET /pools-v3/{address}/history/fees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pools v3 History Fees"
					]
				}
			}
		},
		{
			"displayName": "GET /pools-v3/{address}/history/txs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pools v3 History Txs"
					]
				}
			}
		},
		{
			"displayName": "GET /pools-v3/{address}/history/price",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pools v3 History Price"
					]
				}
			}
		},
		{
			"displayName": "GET /pools-v4/{address}/history/tvl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pools v4 History Tvl"
					]
				}
			}
		},
		{
			"displayName": "GET /pools-v4/{address}/history/volume",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pools v4 History Volume"
					]
				}
			}
		},
		{
			"displayName": "GET /pools-v4/{address}/history/fees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pools v4 History Fees"
					]
				}
			}
		},
		{
			"displayName": "GET /pools-v4/{address}/history/txs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pools v4 History Txs"
					]
				}
			}
		},
		{
			"displayName": "GET /pools-v4/{address}/history/price",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pools v4 History Price"
					]
				}
			}
		},
];
